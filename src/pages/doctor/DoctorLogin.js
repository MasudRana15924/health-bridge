import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctorLogin } from '../../state/user/Login/loginSlice';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const DoctorLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [agree, setAgree] = useState(false);
    const { error,loggeduser } = useSelector(
        (state) => state.userDetails
    );
   
    const user = loggeduser.user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(createDoctorLogin(myForm)); 
    };
   
    useEffect(() => {
        if (user) {
            navigate('/');
            // toast.info('Login Succesfull');
        }
    }, [user, navigate,]);
    return (
        <div>
            <div className=" flex flex-col items-center justify-center mt-24 lg:mt-44">
                <div className="lg:w-3/12 ">
                    <div className=" p-8">
                        <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Login</h2>
                        {
                            error ?    <Alert severity="error" className="mt-5">{error}</Alert>:null
                        }
                        <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email" variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LockOpenIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Password" variant="standard" className="w-full py-3 px-6" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Box>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center ml-2">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                        required
                                    />
                                    <label
                                        htmlFor="accept-terms"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <Link to="/doctor-forgot-password">
                                        <span className="text-sm tracking-wide text-blue-700 mt-5">Forgot password ?</span>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button className=" btn btn-md w-full  bg-blue-500 border-blue-500 hover:bg-blue-500 hover:border-blue-500 mb-5">
                                    <span className="font-semibold text-white text-lg">Login</span>
                                </button>
                                <span className="text-sm tracking-wide text-gray-400 mt-5">Don't have any account ?</span> <Link to="/doctor/signup"> <span className="text-sm font-semibold leading-6 text-gray-900">Create new account</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

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
                    theme="light"
                   
                />
                {/* Same as */}
                <ToastContainer />
      

            </div>
        </div>
    );
};

export default DoctorLogin;