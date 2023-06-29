import React from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HireNurses = ({hire}) => {
    const { nurseId,nursename, nurseimage, nursefees,  date,bookingStatus } =hire;
    return (
        <div className="card col-span-12 sm:col-span-6 md:col-span-3  ">
        <div className="card-body border ">
            <div className="relative">
                <Link to={`/nurse/${nurseId}`}>
                    <img
                        src={nurseimage}
                        className="w-full max-h-48"
                        alt={nursename}
                    />
                </Link>
            </div>

            <div className=" text-start p-5">
                <Link to={`/nurse/${nurseId}`} >
                    <p className="text-slate-600 text-md font-semibold " >
                        Doctor :  {nursename}
                    </p>
                </Link>
                <p className="text-slate-600  text-md font-semibold flex gap-2" >
                    < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{nursefees}Tk
                </p>
                <p className="text-slate-600 text-md font-semibold " >Appointment : {date}</p>
            </div>


        </div>
    </div>
    );
};

export default HireNurses;