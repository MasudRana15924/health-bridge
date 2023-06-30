import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegMoneyBillAlt } from "react-icons/fa";
import imgAvatar from '../../images/avatar.jpg'
const Doctors = ({ doctor }) => {
    const {title, name, expert, degree, fees,avatar, } = doctor;

    return (
        <div className="doctors-card col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3  ">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link to={`/doctor/${doctor._id}`}>
                    {
                     avatar?.url?<img
                        src={avatar.url }
                        className="mx-auto w-3/4 h-32 lg:h-48 "
                        alt={name}
                    />: <img
                    src={imgAvatar}
                    className="mx-auto w-3/4 h-32 lg:h-48"
                    alt={name}
                />
                }
                    </Link>
                </div>

                <div className="hidden lg:block md:block text-start m-5">
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                           {title} {name}
                        </p>
                    </Link>
                    <p className="text-sm font-semibold leading-6 text-gray-900" >
                        {expert}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900" >
                        {degree}
                    </p>
                    <div className="flex gap-2">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {fees}Tk
                        </p>
                    </div>
                </div>

                {/* for small devices */}
                <div className="md:hidden lg:hidden text-start ml-5 mt-5 mb-3">
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                        {title} {name}
                        </p>
                    </Link>
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {expert}
                        </p>
                    </Link>
                    <p className="text-sm font-semibold leading-6 text-gray-900 " >
                        {degree}
                    </p>
                    <div className="flex gap-2">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {fees}Tk
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;