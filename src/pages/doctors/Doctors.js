import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import imgAvatar from '../../images/avatar.jpg'
const Doctors = ({ doctor }) => {
    const { name, expert, degree, fees, ratings,avatar,numOfReviews } = doctor;
    const options = {
        size: "large",
        value: ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div className="doctors-card col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3  ">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link to={`/doctor/${doctor._id}`}>
                    {
                     avatar?.url?<img
                        src={avatar.url }
                        className="w-3/4 mx-auto h-32 md:w-2/4 lg:w-3/4 lg:mx-auto lg:h-60 "
                        alt={name}
                    />: <img
                    src={imgAvatar}
                    className="w-full mx-auto md:w-2/4 lg:w-2/4 max-h-48 "
                    alt={name}
                />
                }
                    </Link>
                </div>

                <div className="hidden lg:block md:block text-start p-5">
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-5" >
                            {name} (  {expert})
                        </p>
                    </Link>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        {degree}
                    </p>
                    <div className="flex gap-2">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {fees}Tk
                        </p>
                    </div>

                </div>


                <div className=" hidden lg:flex justify-between lg:ml-5 mb-8">
                    <p className=""><Rating {...options} size="medium" className="" />{numOfReviews}</p>
                    <Link to={`/doctor/${doctor._id}`} >
                        <button className="h-8 lg:mr-5  border border-violet-400 text-xs pl-1 pr-1">VIEW PROFILE</button>
                    </Link>
                </div>

                {/* for small devices */}
                <div className="md:hidden lg:hidden text-start p-5">
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-5" >
                            Dr. {name}
                        </p>
                    </Link>
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-1" >
                            {expert}
                        </p>
                    </Link>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-1" >
                        {degree}
                    </p>
                    <div className="flex gap-2">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {fees}Tk
                        </p>
                    </div>

                </div>
                {/* for small  */}
                <div className="mr-16 lg:hidden justify-between lg:ml-5 mb-5">
                   <Rating {...options} size="small" className="" />
                    <Link to={`/doctor/${doctor._id}`} >
                        <button className="w-full h-8 ml-6  border border-violet-400 text-xs">VIEW PROFILE</button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Doctors;