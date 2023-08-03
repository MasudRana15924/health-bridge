import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createAppointments } from '../../state/appointments/appointmentsSlice';
import { useEffect } from 'react';
import { TextField } from '@mui/material';
import { addMeetToStore } from '../../state/appointments/doctorMeetSlice';
const BookAppointment = () => {
    const dispatch = useDispatch();
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const { doctor } = useSelector(state => state.doctor.doctor);
    const { appointments } = useSelector(state => state.appointments);
    const userToken = loggeduser.token
    const user = loggeduser.user
    const [name, setName] = useState('');
    const email = user.email;
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [problem, setProblem] = useState('');
    const doctortitle = doctor.title;
    const doctorname = doctor.name;
    const doctoremail = doctor.email;
    const doctorfees = doctor.fees;
    const doctorimage = doctor.avatar?.url;
    const doctorId = doctor._id;
    const doctordegree = doctor.degree;
    const doctorwork = doctor.work;
    const meeturl = doctor.url
    const data = ({ doctortitle, doctorname, doctoremail, doctorfees, doctorimage, doctorId, doctordegree, doctorwork, name, age, weight, height, meeturl, email ,gender,problem});

    const handleCreate = (e) => {
        e.preventDefault();
        if (name && age && weight && height && problem && gender) {
            dispatch(createAppointments({
                data, userToken
            }));
            dispatch(addMeetToStore({meeturl}));
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
    useEffect(() => {
        if (appointments[0]) {
             window.location.replace(appointments[0].url);
        }
    }, [appointments])
    return (
        <div >
            {
                token ?

                    <div className=" lg:w-2/4 mx-auto mt-16 lg:mt-48 mb-12">
                        
                        <form action="" className="lg:mt-10 p-3 lg:w-3/4 mx-auto" onSubmit={handleCreate}>
                        <p className="text-start text-teal-400 text-2xl">Consultation Details</p>
                        <p className="text-start text-gray-400 text-sm mt-5 mb-5">please enter your details to take video consultations</p>
                            <div className="mb-5">
                                <TextField id="outlined-basic" variant="outlined" label="Full Name" className="w-full" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <p id="demo-row-radio-buttons-group-label" className="text-start">Gender</p>
                                  <input name="gender" type="radio"  value="Male" onChange={(e) => setGender(e.target.value)}></input> Male
                                  <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}></input> Female
                            
                            </div>
                            <div className="mt-5">
                                <TextField id="outlined-basic" variant="outlined" label="Age" className="w-full" value={age} onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="mt-5">

                                <TextField id="outlined-basic" variant="outlined" label="Weight" className="w-full" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <div className="mt-5">

                                <TextField id="outlined-basic" variant="outlined" label="Height" className="w-full" value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div>
                            <div className="mt-5">

                                <TextField id="outlined-basic" variant="outlined" label="Write your Problem" className="w-full" value={problem} onChange={(e) => setProblem(e.target.value)} />
                            </div>

                            <button className="btn btn-md bg-teal-500 hover:bg-teal-500 border-teal-500 hover:border-teal-500 mt-5 h-12 lg:w-full w-full text-white font-semibold text-center mb-5 ">Submit </button>
                        </form>
                    </div>
                    : <div>
                        <h3 className="font-bold text-lg text-center text-red-700">Please be Login</h3>
                        <p className="py-4">If You Are New Here Then? <span><Link to="/user-signup" className="text-blue-400">Signup</Link></span> </p>
                        <p className="">If You Have Account <span><Link to="/user-signin" className="text-blue-400">LogIn</Link></span> </p>
                    </div>
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

export default BookAppointment;