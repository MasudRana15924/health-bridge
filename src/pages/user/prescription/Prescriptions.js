import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import logo from '../../../images/diu.png'
import { Box, Button, Modal,} from '@mui/material';
const Prescriptions = ({ booking }) => {
    const { name, age, height, weight, gender, problem, createdAt, doctorname, doctortitle, doctordegree, doctorwork, doctorAdvice, followUp, medicines } = booking;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        height: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div className="card col-span-12  md:col-span-3  gap-4 lg:col-span-4 2xl:col-span-4">
            <div >
                <div className="border">
                    <div className="flex">
                        <img
                            src={logo}
                            className="doctor-image m-3 ml-3 border rounded"
                            alt={doctorname}
                        />
                        <div>
                            <p className="text-slate-600 text-md font-semibold mt-3 mb-5" >
                                {doctortitle} {doctorname}
                            </p>
                            {/* <Button onClick={handleOpen}>Download</Button> */}
                            <Button onClick={handlePrint} >Download</Button>
                        </div>
                    </div>

                </div>
            </div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} className=" hidden lg:block lg:w-2/4">
                    <div ref={componentRef} className="pr-12 pl-12">

                        <div className="">
                            <img src={logo} alt="" className="h-16 w-28" />
                            <hr className="" />
                            <p>Daffodil HealthBridge</p>
                            <p>Daffodil Smart City</p>
                            <p>Ashulia,Savar,Dhaka</p>
                        </div>
                        <div className=" text-center text-blue-500 text-md lg:text-3xl">
                            <p>Medical Prescription</p>
                        </div>
                        <div className="mt-8 lg:flex justify-between gap-4">
                            <p>Patient : {name}</p>
                            <p>Prescription Date :{createdAt}</p>
                        </div>
                        <div className="mt-3 lg:flex justify-between gap-4">
                            <p>Gender : {gender}</p>
                            <p>Age : {age}</p>
                            <p>Weight : {weight}</p>
                            <p>Height : {height}</p>
                        </div>
                        <div className="mt-3 ">
                            <p><span className="text-blue-500">Health Issue : </span> {problem}</p>

                        </div>
                        <p className="mt-10 text-blue-500">Medicine Informartion</p>
                        <div className=" gap-4">
                            {medicines && medicines.map((info) => (
                                <div className="flex justify-between gap-4">
                                    <p> {info.medname}</p>
                                    <p>daily eat {info.dailyUse} times</p>
                                    <p>Duration {info.days} Days</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <p><span className="text-blue-500">Doctor advice : </span> {doctorAdvice}</p>
                            <p><span className="text-blue-500">Next Follow up Date : </span> {followUp}</p>

                        </div>
                        <div className="">
                            <p><span className="text-blue-500">Doctor : </span>{doctortitle} {doctorname} ({doctordegree})</p>
                            <p><span className="text-blue-500">Work in : </span> {doctorwork}</p>
                        </div>
                    </div>
                    <div className="w-2/4 mx-auto mt-12">
                        <Button variant="contained" className="w-full" onClick={handlePrint} >Download</Button>
                    </div>


                </Box>
            </Modal>

        </div>
    );
};

export default Prescriptions;