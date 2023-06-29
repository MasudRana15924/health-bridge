import React from 'react';
import {RxCross1} from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdatePrescription } from '../../state/doctors/updateAppointmentSlice';
import { useState } from 'react';
const DoctorAppointment = ({ booking }) => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const {_id, patientname, patientimage, date, schedule, bookingStatus,patientemail} = booking;
    const [prescription,setPres] = useState('');
    const dispatch = useDispatch();
    const data={prescription,patientemail,patientname }
    const handleCreate = (e) => {
        e.preventDefault();
            dispatch(fetchUpdatePrescription({
                data,userToken,_id
            }));
            // toast.success('Appointments status updated'); 
    }
 
    return (
        <div className="card col-span-12  md:col-span-3 border rounded lg:col-span-4">
            <div className="">
                <div className="flex">
                    <div className="">
                        <img
                            src={patientimage}
                            className="doctor-image m-3 ml-3 border rounded"
                            alt={patientname}
                        />
                    </div>
                    <div className="text-start">
                        <p className="text-slate-600 text-md font-semibold mt-3" >
                            {patientname}
                        </p>
                    </div>
                </div>
                <div className=" text-start ml-5" >
                    <p className="text-slate-600 text-md font-semibold " >Appointment : {date}</p>
                    <p className="text-slate-600 text-md font-semibold " >Slot : {schedule}</p>
                    <p className="text-slate-600 text-md font-semibold " >Status : {bookingStatus}</p>
                    <p className="text-slate-400 text-md font-semibold " >Prescription</p>
                    <p className="text-gray-900 text-md font-semibold " >{booking.prescription}</p>
                    <a href="#my_modal_8" className="btn btn-sm bg-white border-white hover:bg-white hover:border-white mb-10 mt-5 text-gray-900">Make Prescription</a>
                </div>
                <div>
               
                </div>
                <div className="modal" id="my_modal_8">
                    <div className="modal-box ">
                        <h3 className="absolute left-5">Write Prescription</h3>
                      
                        <form className="mt-5" onSubmit={handleCreate}>
                        <textarea className="mt-5 border w-full p-5" onChange={(e) => setPres(e.target.value)}>Type here ....</textarea>
                        <button className="btn btn-sm bg-blue-500 border-blue-500 hover:bg-blue-500 hover:border-blue-500 w-2/4 mt-5">Submit</button>
                        </form>
                        <div className="modal-action">
                            <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">   <RxCross1 className="text-xl text-black"></RxCross1></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorAppointment;