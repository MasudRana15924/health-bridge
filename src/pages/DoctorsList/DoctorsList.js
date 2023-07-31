import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import imgAvatar from '../../images/avatar.jpg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const DoctorsList = ({ doctor }) => {
    const { name, work, expert, degree, fees,avatar, isActive, experience } = doctor;

    return (
        <Link to={`/doctor/${doctor._id}`} >
            <div className="ml-3 mr-3 lg:ml-0 lg:mr-0 lg:w-3/4 mx-auto lg:flex justify-between mt-5 border border-inherit rounded">
                <div className="flex  md:w-2/4 lg:w-2/4  md:flex lg:flex justify-between  mb-5 ">

                    {
                        avatar?.url ? <img
                            src={avatar.url || <Skeleton /> }
                            className="doctor-image m-3 ml-3 border rounded"
                            alt={name}
                        /> : <img
                            src={imgAvatar}
                            className="doctor-image m-3 ml-3 border rounded"
                            alt={name}
                        />
                    }
                    <div className=" w-full text-start ml-5 lg:ml-3 md:ml-3 ">
                        <div className="flex mt-3">
                            <p className="font-semibold"> {name || <Skeleton /> } </p>

                            {
                            isActive === true ? <button className="  bg-green-500 h-6 w-12 border rounded-lg text-white ml-3 mt-1 border-green-500">online</button> : null
                        }
                        </div>
                        <p className="text-slate-600  text-md " >
                            {degree || <Skeleton /> } 
                        </p>
                        <p className="text-slate-400  text-md mt-3" >
                            Specialities
                        </p>
                        <p className=" text-md " >
                            {expert || <Skeleton /> }
                        </p>
                       <div className="mt-5">
                       {/* {
                            isActive === 'true' ?<Link to="/book-appointment"><button className="btn btn-sm border rounded-full  bg-green-500  text-white border-green-500 hover:bg-green-500 hover:border-green-500">See Doctor Now</button></Link>:null
                        } */}
                       </div>
                    </div>
                </div>


                <div className=" lg:w-1/4 ml-5 lg:ml-0 text-start mr-10 mt-5 mb-5 ">
                    <p className="text-slate-600  text-md font-semibold" >
                        Works at {work || <Skeleton /> }
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
                                {experience || <Skeleton /> } Years
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
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{fees || <Skeleton /> } BDT
                    </p>

                </div>

            </div>
        </Link>
    );
};

export default DoctorsList;