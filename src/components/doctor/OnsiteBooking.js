import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createAppointments } from '../../state/appointments/appointmentsSlice';
import { useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Skeleton } from '@mui/material';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
const OnsiteBooking = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const { doctor } = useSelector(state => state.doctor.doctor);
    const userToken = loggeduser.token
    const [patientname, setPname] = useState('');
    const [patientemail, setEmail] = useState('');
    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');
    const doctortitle = doctor.title;
    const doctorname = doctor.name;
    const doctoremail = doctor.email;
    const doctorfees = doctor.fees;
    const doctorimage = doctor.avatar?.url;
    const doctorId = doctor._id;
    const doctordegree = doctor.degree;
    const doctorwork = doctor.work;
    const url = doctor.url
    const data = ({ doctortitle, doctorname, doctoremail, doctorfees, doctorimage, doctorId, doctordegree, doctorwork, patientname, patientemail, patientgender, phone, date, schedule, url });
    const handleCreate = (e) => {
        e.preventDefault();
        if (patientname && phone && date && schedule) {
            dispatch(createAppointments({
                data, userToken
            }));
        } else {
            toast.error('Please enter your details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }
    return (
        <div className="lg:w-3/4 mx-auto mt-24 lg:mt-48 ">
            <div className="lg:hidden w-full flex">
                {
                    doctor?.avatar?.url ? <img
                        src={doctor?.avatar.url}
                        className="h-24 w-24  lg:h-40 lg:w-40 border rounded-lg ml-5 "
                        alt={doctor.name}
                    /> : null
                }
                <div>
                    <p className="ml-5 text-start font-semibold text-md lg:text-xl">{doctor.title}{doctor?.name}</p>
                    <p className="ml-5 text-start ">{doctor?.degree}</p>
                    <p className="ml-5 text-start ">{doctor?.expert} | consultant</p>
                    <p className="ml-5 text-start ">Consultation fees : {doctor?.fees}TK</p>
                </div>
            </div>
            <div className="lg:hidden flex ml-4 mt-3">
                <CiLocationOn className="text-xl"></CiLocationOn>
                <p className="text-start">{doctor?.work}</p>
            </div>

            <Link to={`/doctor/${doctor._id}`} >
                <div className="hidden  ml-3 mr-3 lg:ml-24 lg:mr-0 lg:w-3/4 mx-auto lg:flex justify-between mt-5 border border-inherit rounded">
                    <div className="flex  md:w-2/4 lg:w-2/4  md:flex lg:flex justify-between  mb-5 ">

                        {
                            doctor?.avatar?.url ? <img
                                src={doctor?.avatar.url || <Skeleton />}
                                className="doctor-image m-3 ml-3 border rounded"
                                alt={doctor?.name}
                            /> : null
                        }
                        <div className=" w-full text-start ml-5 lg:ml-3 md:ml-3 ">
                            <div className="flex mt-3">
                                <p className="font-semibold"> {doctor?.name || <Skeleton />} </p>

                            </div>
                            <p className="text-slate-600  text-md " >
                                {doctor?.degree || <Skeleton />}
                            </p>
                            <p className="text-slate-400  text-md mt-3" >
                                Specialities
                            </p>
                            <p className=" text-md " >
                                {doctor?.expert || <Skeleton />}
                            </p>
                            <div className="mt-5">
                            </div>
                        </div>
                    </div>


                    <div className=" lg:w-1/4 ml-5 lg:ml-0 text-start mr-10 mt-5 mb-5 ">
                        <p className="text-slate-600  text-md font-semibold" >
                            Works at {doctor?.work || <Skeleton />}
                        </p>

                        {/* <p className="text-slate-600  text-md font-semibold mt-2" >
                    ({numOfReviews}) Reviews
                </p> */}
                        <div className="flex justify-between lg:block">
                            <div>
                                <p className="text-slate-400  text-md mt-3" >
                                    Experience
                                </p>
                                <p className=" text-md text-black" >
                                    {doctor?.experience || <Skeleton />} Years
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-400  text-md mt-3" >
                                    Total Ratings
                                </p>
                                <p className=" text-md " >
                                    {/* {ratings} */}
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
                            < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{doctor?.fees || <Skeleton />} BDT
                        </p>

                    </div>

                </div>
            </Link>







            {
                token ?

                    <div className=" lg:w-3/4 mx-auto  mb-12">

                        <form action="" className="p-3" onSubmit={handleCreate}>

                            <div className="">
                                <p className="text-start lg:w-3/4 mx-auto text-sm text-blue-300">What is your Name?</p>
                                <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Enter Patient Name" className="border border-gray-300 rounded lg:w-3/4 mx-auto w-full p-2 h-12" />
                            </div>
                           
                            <div>
                                <p className="text-start lg:w-3/4 mx-auto text-sm text-blue-300 ">What is your Phone?</p>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Patient Phone " className="border border-gray-200 rounded w-full lg:w-3/4 p-2 h-12 mx-auto " />
                            </div>
                            <div>
                                <p className="text-start lg:w-3/4 mx-auto text-sm text-blue-300 mt-5">What is your Gender?</p>
                                <select name="Gender" className="w-full lg:w-3/4 h-12 border rounded " value={patientgender} onChange={(e) => setGender(e.target.value)}>
                                    <option  >Select Gender </option>
                                    <option  >Male </option>
                                    <option >Female </option>
                                </select>
                            </div>
                            <div>


                                <p className="text-start lg:w-3/4 mx-auto text-sm text-blue-300 mt-5">Select appointment Date?</p>
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-full lg:w-3/4 p-2 h-12 mx-auto  text-black" />

                            </div>
                            <div>
                                <p className="text-start lg:w-3/4 mx-auto text-sm text-blue-300 mt-5">Select appointment Slots?</p>
                                <select className="w-full lg:w-3/4 h-12 border rounded" value={schedule} onChange={(e) => setSchedule(e.target.value)}  >
                                    <option  >Select Slots</option>
                                    <option >Morning </option>
                                    <option >Afternoon </option>
                                    <option >Evening </option>
                                </select>
                            </div>

                            <button className="btn btn-md bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500 mt-5 h-12 lg:w-3/4 w-full text-white font-semibold text-center mb-5 ">Book Appointment </button>
                        </form>
                    </div>
                    : null
            }
            <ToastContainer
                position="top-right"
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

export default OnsiteBooking;