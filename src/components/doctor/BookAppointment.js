import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createAppointments } from '../../state/appointments/appointmentsSlice';
import { useEffect } from 'react';

const BookAppointment = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const { doctor } = useSelector(state => state.doctor.doctor);
    const  {appointments} = useSelector(state => state.appointments);
    // const url=appointments[0].url;
    
    const userToken = loggeduser.token
    const [patientname, setPname] = useState('');
    const [patientemail, setEmail] = useState('');
    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');
    const doctortitle = doctor.title;
    const doctorname = doctor.name;
    const doctoremail = doctor.email;
    const doctorfees = doctor.fees;
    const doctorimage = doctor.avatar?.url;
    const doctorId = doctor._id;
    const doctordegree = doctor.degree;
    const doctorwork = doctor.work;
    const data = ({ doctortitle, doctorname, doctoremail, doctorfees, doctorimage, doctorId, doctordegree, doctorwork, patientname, patientemail, patientgender, phone, date, schedule });
    const handleCreate = (e) => {
        e.preventDefault();

        if (patientname && patientemail && patientgender && phone && date) {
            dispatch(createAppointments({
                data, userToken
            }));

            //  window.location.replace(url)
            
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
             console.log('url',appointments[0].url);
            //  navigate(appointments[0].url)
        }
    }, [appointments, navigate])

    return (
        <div >
            {
                token ?

                    <div className="lg:w-1/4 mx-auto mt-48">
                        <h3 class="text-start w-3/4 mx-auto text-3xl font-bold mb-5">Make an Appointment</h3>
                        <form action="" className="mt-10" onSubmit={handleCreate}>

                            <div className="">
                                <p className="text-start w-3/4 mx-auto text-sm text-blue-300">What is your Name?</p>
                                <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Enter Patient Name" className="border border-gray-300 rounded w-3/4 mx-auto   p-2 h-12" />
                            </div>
                            <div>
                                <p className="text-start w-3/4 mx-auto text-sm text-blue-300 mt-5">What is your Email?</p>
                                <input type="text" value={patientemail} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Patient Email" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                            </div>
                            <div>
                                <p className="text-start w-3/4 mx-auto text-sm text-blue-300 mt-5">What is your Phone?</p>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Patient Phone " className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto " />
                            </div>
                            <div>
                                <p className="text-start w-3/4 mx-auto text-sm text-blue-300 mt-5">What is your Gender?</p>
                                <select name="Gender" className="w-3/4 h-12 border rounded " value={patientgender} onChange={(e) => setGender(e.target.value)}>
                                    <option  >Select Gender </option>
                                    <option  >Male </option>
                                    <option >Female </option>
                                </select>
                            </div>
                            <div>


                                <p className="text-start w-3/4 mx-auto text-sm text-blue-300 mt-5">Select appointment Date?</p>
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto  text-black" />

                            </div>
                            <div>
                                <p className="text-start w-3/4 mx-auto text-sm text-blue-300 mt-5">Select appointment Slots?</p>
                                <select className="w-3/4 h-12 border rounded" value={schedule} onChange={(e) => setSchedule(e.target.value)}  >
                                    <option  >Select Slots</option>
                                    <option >Morning </option>
                                    <option >Afternoon </option>
                                    <option >Evening </option>
                                </select>
                            </div>

                            <button className="btn bg-black mt-5 h-12 w-3/4  text-white font-semibold text-center mb-5">Book Appointment </button>
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