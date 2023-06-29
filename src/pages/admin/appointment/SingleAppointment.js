import React from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import UpdateAppointments from '../UpdateAppointments';

const SingleAppointment = ({ appointment }) => {
    const { doctorname, doctorimage, doctorfees, patientname, patientemail, phone, patientgender, date, schedule, bookingStatus } = appointment;
    return (
        <>
            <div className="card w-2/4 ">
                <div className="card-body border ">
                    <div className="relative">
                        <img
                            src={doctorimage}
                            className="w-full max-h-48"
                            alt={doctorname}
                        />
                    </div>

                    <div className=" text-start p-5">

                        <p className="text-slate-600 text-md font-semibold " >
                            Doctor :  {doctorname}
                        </p>

                        <p className="text-slate-600  text-md font-semibold flex gap-2" >
                            < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{doctorfees}Tk
                        </p>
                        <p className="text-slate-600 text-md font-semibold " >Slot : {schedule}</p>
                    </div>
                    <div className=" text-start p-5">
                        <p className="text-slate-600 text-md font-semibold " >Patient :  {patientname} </p>
                        <p className="text-slate-600 text-md font-semibold " >  Gender :  {patientgender} </p>
                        <p className="text-slate-600  text-md font-semibold flex gap-2" > {patientemail} </p>
                        <p className="text-slate-600 text-md font-semibold " >Phone : {phone}</p>
                        <p className="text-slate-600 text-md font-semibold " >Appointment : {date}</p>
                        <p className="text-slate-600 text-md font-semibold " >Slot : {schedule}</p>
                        <p className="text-slate-600 text-md font-semibold " >Status : {bookingStatus}</p>
                    </div>
                    <label for="appointment-modal" className=" border-0 btn bg-violet-700 mt-7  w-3/4 mx-auto mb-10">Update Appointment Status</label>
                </div>
            </div>

            <UpdateAppointments appointment={appointment}></UpdateAppointments>
        </>
    );
};

export default SingleAppointment;