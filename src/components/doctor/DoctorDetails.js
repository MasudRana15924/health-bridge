import React from 'react';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reviews from './Reviews';
import { createreviews } from '../../state/doctor/reviewSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import imgAvatar from '../../images/avatar.jpg'
import { BiVideoOff } from "react-icons/bi";
import { GiHospitalCross } from "react-icons/gi";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Skeleton } from '@mui/material';


const DoctorDetails = ({ doctor }) => {
    const { title, avatar, name, work, expert, degree, fees, ratings, description, reviews, isActive, experience } = doctor;
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    const userToken = loggeduser.token
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const doctorId = doctor._id
    const reviewSubmitHandler = () => {
        const myForm = new FormData();
        myForm.set("rating", rating);
        myForm.set("comment", comment);
        myForm.set("doctorId", doctor._id);
        const data = ({ rating, comment, doctorId });
        if (userToken) {
            dispatch(createreviews({ data, userToken }));
            toast.success('Review Added', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            },
            );
            window.location.reload();
        }
    };

    return (
        // <div>
        //  <div className="border rounded-lg lg:border-0 w-full mb-5 lg:mt-40 lg:grid lg:grid-cols-2">
        //         <div>
        //             {
        //                 avatar?.url ? <img
        //                     src={avatar.url}
        //                     className="w-3/4 mx-auto  h-48 md:w-2/4 lg:w-3/4 lg:mx-auto lg:h-60 "
        //                     alt={name}
        //                 /> : <img
        //                     src={imgAvatar}
        //                     className="w-3/4 mx-auto mt-5 md:w-2/4 lg:w-3/4 h-48 lg:h-60"
        //                     alt={name}
        //                 />
        //             }
        //         </div>
        //         <div className="p-5 lg:p-0 text-start text-sm font-semibold leading-6 text-gray-900">
        //             <div className="flex mt-3">
        //                 <p className="font-semibold text-lg">{title} {name} </p>
        //                 {/* {
        //                     isActive === true ? <GoPrimitiveDot className="text-green-600 text-xl mt-1"></GoPrimitiveDot> : null
        //                 } */}
        //                  {
        //                     isActive === true ? <button className="  bg-green-500 h-6 w-12 border rounded-lg text-white ml-3 mt-1 border-green-500">active</button> : null
        //                 }
        //             </div>
        //             <p className="text-slate-600  text-md " >
        //                 {degree}
        //             </p>
        //             <p className="text-slate-400  text-md mt-3" >
        //                 Specialities
        //             </p>
        //             <p className=" text-md " >
        //                 {expert}
        //             </p>
        //             <div>
        //                 <p className="text-slate-600  text-md font-semibold mt-3" >
        //                     Works at {work}
        //                 </p>
        //                 <div className="flex justify-between lg:block">
        //                     <div>
        //                         <p className="text-slate-400  text-md mt-3" >
        //                             Experience
        //                         </p>
        //                         <p className=" text-md text-black" >
        //                             {experience} Years
        //                         </p>
        //                     </div>
        //                     <div>
        //                         <p className="text-slate-400  text-md mt-3" >
        //                             Total Ratings ({ratings})
        //                         </p>
        //                         <p className=" text-md " >
        //                             {/* {ratings} */}
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
        //                     Consultation Fees {fees} BDT
        //                 </p>
        //               {
        //                 description?<p className="mt-5 w-3/4 font-semibold ">{description} </p> :  <p className="text-gray-900 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit at error facere modi repellendus pariatur saepe, natus officia voluptatum expedita earum maxime debitis. Dicta quae expedita numquam aliquam omnis autem.</p>
        //               }
        //                 <div className="flex justify-between">
        //                     <Link to="/hospital/appointment"><button className="btn btn-sm border rounded-full  bg-gray-400  text-gray-900 border-gray-400 hover:bg-gray-400 hover:border-gray-400 mt-5"> <GiHospitalCross className="mr-3"></GiHospitalCross> Hospital Visit</button></Link>
        //                     <div>
        //                         {
        //                             isActive === true ? <Link to="/book-appointment"><button className="btn btn-sm border rounded-full  bg-green-500  text-white border-green-500 hover:bg-green-500 hover:border-green-500 mt-5"><BiVideoOff className="mr-2 text-xl"></BiVideoOff>  See Doctor Now</button></Link> : null
        //                         }
        //                     </div>
        //                 </div>

        //             </div>

        //         </div>
        //     </div>

        //     <div className="hidden lg:grid lg:grid-cols-2">
        //         <div className="w-2/4 mx-auto">

        //             <h2 className="text-start  text-md">Reviews ({reviews.length})</h2>
        //             {
        //                 reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
        //                     : <p className="text-2xl text-start mt-10 text-red-700">No Reviews Yet !!!</p>
        //             }
        //         </div>
        //         {
        //             user ? <div className="w-2/4 ">
        //                 <p className="mb-3 text-start font-semibold">Give a review</p>
        //                 <Rating
        //                     onChange={(e) => setRating(e.target.value)}
        //                     value={rating}
        //                     className='w-full'
        //                 />
        //                 <br />
        //                 <textarea placeholder="Write ..." class="textarea textarea-bordered textarea-sm mt-2 w-full ml-0" value={comment}
        //                     onChange={(e) => setComment(e.target.value)}></textarea>
        //                 <br />
        //                 <button class="btn btn-sm w-full mt-2 bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500" onClick={reviewSubmitHandler}>Submit</button>
        //             </div> : null
        //         }
        //     </div>
        //     {/* review for small devices */}
        //     <div className="lg:hidden md:hidden">
        //         {
        //             user ? <div className="lg:w-1/4 mb-10">
        //                 <p className="mb-3 text-start font-semibold">Give a review</p>
        //                 <Rating
        //                     onChange={(e) => setRating(e.target.value)}
        //                     value={rating}
        //                     className='w-full'
        //                 />
        //                 <br />
        //                 <textarea placeholder="Write ..." class="textarea textarea-bordered textarea-sm mt-2 w-full ml-0" value={comment}
        //                     onChange={(e) => setComment(e.target.value)}></textarea>
        //                 <br />
        //                 <button class="btn btn-sm w-full mt-2 bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500" onClick={reviewSubmitHandler}>Submit</button>
        //             </div> : null
        //         }
        //         <div className="">
        //             <h2 className="text-start text-md">Reviews ({reviews.length})</h2>
        //             <div className=''>
        //                 {
        //                     reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
        //                         : <p className="text-2xl text-start  text-red-700">No Reviews Yet !!!</p>
        //                 }
        //             </div>
        //         </div>
        //     </div>
        //     <ToastContainer
        //         position="top-right"
        //         autoClose={5000}
        //         hideProgressBar={false}
        //         newestOnTop={false}
        //         closeOnClick
        //         rtl={false}
        //         pauseOnFocusLoss
        //         draggable
        //         pauseOnHover
        //         theme="dark"
        //     />
        //     {/* Same as */}
        //     <ToastContainer />
        // </div>
        <div>
            <Link to={`/doctor/${doctor._id}`} >
                <div className="ml-3 mr-3  lg:mr-0 lg:w-full mx-auto lg:flex justify-between mt-5 border rounded-lg border-inherit  ">
                    <div className="flex  lg:w-2/4  md:flex lg:flex justify-between  mb-5 ">

                        {
                            avatar?.url ? <img
                                src={avatar.url || <Skeleton />}
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
                                <p className="font-semibold">{title} {name || <Skeleton />} </p>

                                {
                                    isActive === true ? <button className="  bg-green-500 h-6 w-12 border rounded-lg text-white ml-3  border-green-500">online</button> : null
                                }
                            </div>
                            <p className="text-slate-600  text-md " >
                                {degree || <Skeleton />}
                            </p>
                            <p className="text-slate-400  text-md mt-3" >
                                Specialities
                            </p>
                            <p className=" text-md " >
                                {expert || <Skeleton />}
                            </p>
                            <div className="mt-5">

                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-1/4 ml-5 lg:ml-0 text-start mr-10 mb-5 ">
                        <p className="text-slate-600  text-md font-semibold mt-3" >
                        {work || <Skeleton />}
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
                                    {experience || <Skeleton />} Years
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
                            < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{fees || <Skeleton />} BDT
                        </p>

                    </div>
                    <div className="ml-5 w-full lg:ml-0 lg:w-1/4 mb-5">
                        <p className="text-slate-600  text-md font-semibold text-start mt-3">Description</p>
                        {
                            description ? <p className="text-gray-900  text-xs text-start">{description} </p> : <p className="text-gray-900  text-xs text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit at error facere modi repellendus pariatur saepe, natus officia voluptatum </p>
                        }
                         <div className="mr-12 lg:mr-2">
                            <Link to="/hospital/appointment"><button className="w-full btn btn-sm border rounded-full  bg-gray-400  text-gray-900 border-gray-400 hover:bg-gray-400 hover:border-gray-400 mt-5"> <GiHospitalCross className="mr-3"></GiHospitalCross> Hospital Visit</button></Link>
                             <div>
                                 {
                                   isActive === true ? <Link to="/book-appointment"><button className="w-full mt-5 btn btn-sm border rounded-full  bg-green-500  text-white border-green-500 hover:bg-green-500 hover:border-green-500 mb-10"><BiVideoOff className="mr-2 text-xl"></BiVideoOff>  See Doctor Now</button></Link> : null
                                }
                            </div>
                         </div>
                    </div>

                </div>
            </Link>
            <div className="hidden lg:grid lg:grid-cols-2 mt-12">
                <div className="w-2/4 ml-3">

                     <h2 className="text-start  text-md">Reviews ({reviews.length})</h2>
                     {
                         reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
                             : <p className="text-2xl text-start mt-10 text-red-700">No Reviews Yet !!!</p>
                     }
                 </div>
                 {
                     user ? <div className="w-3/4 ">
                         <p className="mb-3 text-start font-semibold">Give a review</p>
                         <Rating
                             onChange={(e) => setRating(e.target.value)}
                             value={rating}
                             className='w-full'
                         />
                       <br />
                         <textarea placeholder="Write ..." class="textarea textarea-bordered  textarea-sm mt-2 w-full ml-0 " value={comment}
                            onChange={(e) => setComment(e.target.value)}></textarea>
                         <br />
                         <button class="btn btn-sm w-full mt-2 bg-teal-400 hover:bg-teal-400 border-teal-400 hover:border-teal-400" onClick={reviewSubmitHandler}>Submit</button>
                 </div> : null
                 }
             </div>
             <div className="lg:hidden md:hidden mt-5 p-3">
                {
                    user ? <div className="lg:w-1/4 mb-10">
                     <p className="mb-3 text-start font-semibold">Give a review</p>
                         <Rating
                         onChange={(e) => setRating(e.target.value)}
                             value={rating}
                             className='w-full'
                         />
                         <br />
                         <textarea placeholder="Write ..." class="textarea textarea-bordered textarea-sm mt-2 w-full ml-0" value={comment}
                            onChange={(e) => setComment(e.target.value)}></textarea>
                         <br />
                         <button class="btn btn-sm w-full mt-2 bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500" onClick={reviewSubmitHandler}>Submit</button>
                    </div> : null
                 }
                 <div className="">
                     <h2 className="text-start text-md">Reviews ({reviews.length})</h2>
                     <div className=''>
                         {
                             reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
                                 : <p className="text-2xl text-start  text-red-700">No Reviews Yet !!!</p>
                         }
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default DoctorDetails;