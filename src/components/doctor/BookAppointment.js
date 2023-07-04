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
    const [phone, setPhone] = useState('');
    const doctortitle = doctor.title;
    const doctorname = doctor.name;
    const doctoremail = doctor.email;
    const doctorfees = doctor.fees;
    const doctorimage = doctor.avatar?.url;
    const doctorId = doctor._id;
    const doctordegree = doctor.degree;
    const doctorwork = doctor.work;
    const url=doctor.url
    const data = ({ doctortitle, doctorname, doctoremail, doctorfees, doctorimage, doctorId, doctordegree, doctorwork, patientname, patientemail, phone ,url});
    const handleCreate = (e) => {
        e.preventDefault();

        if (patientname && patientemail && phone ) {
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

                    <div className=" lg:w-1/4 mx-auto mt-24 lg:mt-48 mb-12">
                        
                        <form action="" className="lg:mt-10 p-3" onSubmit={handleCreate}>

                            <div className="">
                               
                                <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Enter Patient Name" className="border border-gray-300 rounded lg:w-3/4 mx-auto w-full p-2 h-12" />
                            </div>
                            <div>
                          
                                <input type="text" value={patientemail} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Patient Email" className="border border-gray-200 rounded lg:w-3/4 w-full p-2 h-12 mx-auto mt-5 mb-5" />
                            </div>
                            <div>

                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Patient Phone " className="border border-gray-200 rounded w-full lg:w-3/4 p-2 h-12 mx-auto " />
                            </div>
                            <button className="btn btn-md bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500 mt-5 h-12 lg:w-3/4 w-full text-white font-semibold text-center mb-5 ">Book Appointment </button>
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