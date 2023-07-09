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
                            <Button onClick={handleOpen}>Download</Button>
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
                <Box sx={style} >
                    <div ref={componentRef} className="pr-12 pl-12">

                        <div className="">
                            <img src={logo} alt="" className="h-16 w-28" />
                            <hr className="" />
                            <p>Daffodil HealthBridge</p>
                            <p>Daffodil Smart City</p>
                            <p>Ashulia,Savar,Dhaka</p>
                        </div>
                        <div className=" text-center text-blue-500 text-3xl">
                            <p>Medical Prescription</p>
                        </div>
                        <div className="mt-8 flex justify-between gap-4">
                            <p>Patient : {name}</p>
                            <p>Prescription Date :{createdAt}</p>
                        </div>
                        <div className="mt-3 flex justify-between gap-4">
                            <p>Gender : {gender}</p>
                            <p>Age : {age}</p>
                            <p>Weight : {weight}</p>
                            <p>Height : {height}</p>
                        </div>
                        <div className="mt-3 ">
                            <p><span className="text-blue-500">Health Issue : </span> {problem}</p>

                        </div>
                        <p className="mt-10 text-blue-500">Medicine Informartion</p>
                        <div className="  gap-4">
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
                        <Button variant="contained" className="w-full" onClick={handlePrint} >Contained</Button>
                    </div>


                </Box>
            </Modal>
            {/* <a href="#my_modal_8" className="bg-green-500 h-10 text-center text-white pt-2 font-semibold">See Prescription</a>
        
            <div className="modal" id="my_modal_8">
                <div className="modal-box">

                    <div ref={componentRef}>
                        <div>
                            <img
                                // src={banner}
                                className="w-full h-16"
                                alt={doctorname}
                            />
                        </div>
                        <div className="flex justify-between m-10">

                            <div className="">
                                <img
                                    // src={doctorimage}
                                    className="doctor-image m-3 ml-3 border rounded"
                                    alt={doctorname}
                                />
                            </div>
                            <div className="text-start">
                                <p className="text-slate-600 text-md font-semibold mt-3" >
                                    {doctortitle}   {doctorname}
                                </p>
                                <p className=" mt-2" >
                                    {doctordegree}
                                </p>
                                <p>
                                    Works at {doctorwork}
                                </p>
                            </div>
                        </div>
                        <div className=" text-start ml-10">

                            <p className="text-slate-400 text-md font-semibold " >Prescription</p>
                            <p className="text-gray-900 text-md w-2/4 " >{booking.prescription}</p>
                        </div>
                    </div>
                   <button onClick={handlePrint} className="print__button btn btn-sm bg-slate-600 border-slate-600 hover:bg-slate-600 hover:border-slate-600 w-1/4 mx-auto mb-5 mt-12">Download</button>
                   

                    <div className="modal-action">
                        <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">   <RxCross1 className="text-xl text-black"></RxCross1></a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Prescriptions;