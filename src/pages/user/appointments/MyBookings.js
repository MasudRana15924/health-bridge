import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { RxCross1 } from "react-icons/rx";
import banner from '../../../images/main.png'
const MyBookings = ({ booking }) => {
    const { doctorname, doctorimage, date, schedule, bookingStatus, doctordegree, doctorwork, doctortitle } = booking;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div className="card col-span-12  md:col-span-3 border rounded gap-4 lg:col-span-4">
            <div ref={componentRef}>
                <div className="flex">
                    <div className="">
                        <img
                            src={doctorimage}
                            className="doctor-image m-3 ml-3 border rounded"
                            alt={doctorname}
                        />
                    </div>
                    <div className="text-start">
                        <p className="text-slate-600 text-md font-semibold mt-3" >
                            {doctorname}
                        </p>
                    </div>
                </div>
                <div className=" text-start ml-5">
                    <p className="text-slate-600 text-md font-semibold " >Appointment : {date}</p>
                    <p className="text-slate-600 text-md font-semibold " >Slot : {schedule}</p>
                    <p className="text-slate-600 text-md font-semibold " >Status : {bookingStatus}</p>
                    <p className="text-slate-400 text-md font-semibold " >Prescription</p>
                    <p className="text-gray-900 text-md font-semibold " >{booking.prescription}</p>
                </div>
            </div>
          
           {
            booking.prescription ?  <a href="#my_modal_8" className="bg-green-500 h-10 text-center text-white pt-2 font-semibold">See Prescription</a>:null
           }
            {/* <a href={booking.url} target="_blank" rel="noopener noreferrer" className="bg-green-500 h-10 text-center text-white pt-2 font-semibold">See Doctor </a> */}
            {/* download prescription */}
            <div className="modal" id="my_modal_8">
                <div className="modal-box">

                    <div ref={componentRef}>
                        <div>
                            <img
                                src={banner}
                                className="w-full h-16"
                                alt={doctorname}
                            />
                        </div>
                        <div className="flex justify-between m-10">

                            <div className="">
                                <img
                                    src={doctorimage}
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
            </div>
        </div>
    );
};

export default MyBookings;