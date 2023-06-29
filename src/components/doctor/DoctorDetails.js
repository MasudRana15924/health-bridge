import React from 'react';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reviews from './Reviews';
import { createreviews } from '../../state/doctor/reviewSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import imgAvatar from '../../images/avatar.jpg'
import { GoPrimitiveDot } from "react-icons/go";


const DoctorDetails = ({ doctor }) => {
    const { avatar, name, work, expert,  degree, fees, ratings, description, reviews, isActive, experience } = doctor;
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
        <div>
            <div className=" w-full   mb-5 lg:mt-20 grid lg:grid-cols-2 ">
                <div>


                    {
                        avatar?.url ? <img
                            src={avatar.url}
                            className="w-3/4 mx-auto h-32 md:w-2/4 lg:w-3/4 lg:mx-auto lg:h-60 "
                            alt={name}
                        /> : <img
                            src={imgAvatar}
                            className="w-full mx-auto md:w-2/4 lg:w-2/4 max-h-48 "
                            alt={name}
                        />
                    }

                </div>
                <div className="text-start text-sm font-semibold leading-6 text-gray-900">
                    <div className="flex mt-3">
                        <p className="font-semibold text-lg"> {name} </p>
                        {
                            isActive === 'true' ? <GoPrimitiveDot className="text-green-600 text-xl"></GoPrimitiveDot> : null
                        }
                    </div>
                    <p className="text-slate-600  text-md " >
                        {degree}
                    </p>
                    <p className="text-slate-400  text-md mt-3" >
                        Specialities
                    </p>
                    <p className=" text-md " >
                        {expert}
                    </p>
                    <div>
                        <p className="text-slate-600  text-md font-semibold mt-3" >
                            Works at {work}
                        </p>
                        <div className="flex justify-between lg:block">
                            <div>
                                <p className="text-slate-400  text-md mt-3" >
                                    Experience
                                </p>
                                <p className=" text-md text-black" >
                                    {experience} Years
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-400  text-md mt-3" >
                                    Total Ratings ({ratings})
                                </p>
                                <p className=" text-md " >
                                    {/* {ratings} */}
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
                            Consultation Fees {fees} BDT
                        </p>
                        <p className="mt-5 w-3/4 font-semibold ">{description} </p>
                        {
                            isActive === 'true' ?<Link to="/book-appointment"><button className="btn btn-sm border rounded-full  bg-green-500  text-white border-green-500 hover:bg-green-500 hover:border-green-500">See Doctor Now</button></Link>:null
                        }

                    </div>
                    <Link to="/book-appointment">
                        <button className="border-0 btn bg-blue-500 mt-7 w-full lg:w-3/4 mx-auto mb-10">Take Onsite Appointment</button>

                    </Link>

                </div>


            </div>

            <div className="hidden lg:grid lg:grid-cols-2">
                <div className="w-2/4 mx-auto">

                    <h2 className="text-start  text-md">Reviews ({reviews.length})</h2>
                    {
                        reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
                            : <p className="text-2xl text-start mt-10 text-red-700">No Reviews Yet !!!</p>
                    }
                </div>
                {
                    user ? <div className="w-2/4  ml-5">
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
                        <button class="btn w-full mt-2 bg-violet-600 border-violet-600" onClick={reviewSubmitHandler}>Submit</button>
                    </div> : <div class=" border rounded alert alert-error shadow-lg lg:w-3/4 h-12 ">
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Please be Login to Give a Review</span>
                        </div>
                    </div>
                }
            </div>
            {/* review for small devices */}
            <div className="lg:hidden md:hidden">
                {
                    user ? <div className="lg:w-1/4 ml-5">
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
                        <button class="btn w-full mt-2 bg-violet-600 border-violet-600" onClick={reviewSubmitHandler}>Submit</button>
                    </div> : <div class="alert alert-error shadow-lg w-3/4 lg:mt-5 h-12 ml-5 text-sm text-start">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Be Login to Give Review</span>
                        </div>
                    </div>
                }
                <div>

                    <h2 className="text-start text-md mt-10 ml-5">Reviews ({reviews.length})</h2>
                    <div className='ml-5'>
                        {
                            reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
                                : <p className="text-2xl text-start mt-10 text-red-700">No Reviews Yet !!!</p>
                        }
                    </div>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
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

export default DoctorDetails;