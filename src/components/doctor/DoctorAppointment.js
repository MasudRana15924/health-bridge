import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreatePrescription } from '../../state/doctors/updateAppointmentSlice';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../images/diu.png'
import { Box, Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";

const DoctorAppointment = ({ booking }) => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        height: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const { _id, name, age, gender,weight,height, problem, user, doctortitle, doctorname, doctordegree, doctorwork, doctorId } = booking;
    const userId = user;
    const appointmentId = _id;
    const [doctorAdvice, setdoctorAdvice] = useState('');
    const [followUp, setfollowUp] = useState('');

    const [medicines, setMedicines] = useState([{
        medname: "",
        dailyUse: "",
        days: "",
        quantity: "",
    }]);
    const handleMedicine = (index, field, value) => {
        const updatedMedicine = [...medicines];
        updatedMedicine[index] = {
            ...updatedMedicine[index],
            [field]: value
        }
        setMedicines(updatedMedicine);
    }
    const handleAddPrescription = (e) => {
        e.preventDefault();
        if (medicines.length < 10) {
            const newMedicines = {
                medname: "",
                dailyUse: "",
                days: "",
                quantity: "",
            };
            setMedicines([...medicines, newMedicines]);
        }
    };

    const { medname, dailyUse, days, quantity } = medicines;
    const medInfo = { medname, dailyUse, days, quantity }
    const handleCreate = (e) => {
        console.log(medicines);
        const data = { medicines, medInfo, userId, doctorId, appointmentId, doctorAdvice, followUp, doctortitle, doctorname, doctordegree, doctorwork,name, age, gender, problem,weight,height, }
        e.preventDefault();
        dispatch(fetchCreatePrescription({
            data, userToken
        }));
       if(data){
        toast.success('Prescription added', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
       }else{
        toast.success('Input field missing', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
       }
        // setlist([...list, { medname, dailyUse, days, quantity }]);
        // console.log("data", list);
    }


    return (
        <div className=" col-span-12  md:col-span-3 border rounded lg:col-span-6 2xl:col-span-4">
            <div className="">
                <div className="flex">
                    <div className="">
                        <img
                            // src={patientimage}
                            className="doctor-image m-3 ml-3 border rounded"
                            alt={name}
                        />
                    </div>
                    <div className="text-start">
                        <p className="text-slate-600 text-md font-semibold mt-3" >
                            {name}
                        </p>
                        <p className="text-slate-600 text-md font-semibold " >Gender : {gender}</p>
                        <p className="text-slate-600 text-md font-semibold " >Age : {age}</p>

                    </div>
                </div>
                <div className=" text-start ml-5" >
                    <p className="text-slate-400 text-md font-semibold nb-10" >Problem</p>
                    <p className="text-slate-600 text-md font-semibold " >{problem}</p>
                    {/* <a href="#my_modal_8" className="text-center text-green-600 pt-2 font-semibold mt-20">Make Prescription</a> */}
                    <Button onClick={handleOpen}>Set Prescription</Button>
                </div>
                <div>

                </div>

            </div>


            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <form action="">
                        <div className="">
                            <img src={logo} alt="" className="h-16 w-28" />
                        </div>
                        {medicines.map((medicine, index) => (
                            <div className="mt-8 flex gap-4">

                                <TextField name="medname" id="outlined-basic" label="Medicine Name" variant="outlined" value={medicine.medname} onChange={(e) => handleMedicine(index, 'medname', e.target.value)} />
                                <TextField name="dailyUse" id="outlined-basic" label="Daily how many times" variant="outlined" value={medicine.dailyUse} onChange={(e) => handleMedicine(index, 'dailyUse', e.target.value)} />
                                <TextField name="days" id="outlined-basic" label="For how many days" variant="outlined" value={medicine.days} onChange={(e) => handleMedicine(index, 'days', e.target.value)} />
                                <TextField name="quantity" id="outlined-basic" label="Total Quantity" variant="outlined" value={medicine.quantity} onChange={(e) => handleMedicine(index, 'quantity', e.target.value)} />
                            </div>
                        ))}

                        <button onClick={handleAddPrescription} className="text-blue-500"> Add More Medicines</button>

                        <div className="mt-24  gap-5">
                            <div className="mt-5">
                                <TextField id="outlined-basic" label="Doctors Advice" variant="outlined" value={doctorAdvice} onChange={(e) => setdoctorAdvice(e.target.value)} />
                            </div>
                            <div className="mt-5">
                                <p>Follow up date</p>
                                <TextField id="outlined-basic" label="day-month-year" variant="outlined"
                                    value={followUp} onChange={(e) => setfollowUp(e.target.value)} />
                            </div>
                        </div>
                        <div className="w-1/4 mx-auto mt-12">
                            <Button variant="contained" className="w-full" onClick={handleCreate}>Submit</Button>
                        </div>
                    </form>

                </Box>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default DoctorAppointment;