import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { doctorResetPassword } from '../../state/doctors/resetPAsswordSlice';
import Alert from '@mui/material/Alert';
const DoctorResetPassword = () => {
    const navigate = useNavigate();
    const { token} = useParams()
    const dispatch = useDispatch();
     const {error,success } = useSelector(state => state.doctorResetPassword);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = ({ password, confirmPassword });
        if (data) {
             dispatch(doctorResetPassword({data,token})); 
        } else {
            toast.error('Please Enter Email', {
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
    };
    
  useEffect(() => {
    if (success) {
        navigate("/doctor/login");
    }
  }, [dispatch, error,success,navigate]);
    return (
        <div className="flex flex-col items-center justify-center  mt-24 lg:mt-44 m-5">
            <div className="w-full  max-w-md">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="mt-5 mb-5 lg:text-3xl font-medium  text-start ">Reset Password</h2>
                    {
                            error ?    <Alert severity="error" className="mt-5 mb-5">{error}</Alert>:null
                        }
                    <form onSubmit={registerSubmit} className="mt-10 mb-10">

                        <div className="mb-4">
                            <input className="border border-gray-200 w-full h-10 rounded p-3" type="password" id="useremail"
                                name="email"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your New Password"
                                required
                            />
                        </div>
                        <div className="mb-10">
                            <input className="border border-gray-200 w-full h-10 rounded p-3" type="password" id="useremail"
                                name="email"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button className=" text-white py-1 w-full  font-semibold h-10 bg-blue-500" type="submit">Update</button>

                    </form>
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

export default DoctorResetPassword;
// export default DoctorResetPassword;
