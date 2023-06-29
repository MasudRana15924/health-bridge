import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doctorforgotPassword } from '../../state/doctors/doctorforgotpasswordSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Alert, Box, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
const DoctorForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
     const {error } = useSelector(state => state.doctorforgotpassword);
    const registerSubmit = (e) => {
          e.preventDefault();
         const data = ({email});
          dispatch(doctorforgotPassword(data));  
          toast.success('Email send Succesfull');  
    }
    return (
        <div className="flex flex-col items-center justify-center mt-28 lg:mt-56 m-5 mb-12">
            <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="mt-5 mb-5 text-2xl lg:text-2xl font-medium  text-start ">Forgot Password</h2>
            <form onSubmit={registerSubmit} className="mt-10 mb-10">
            {
                            error ?    <Alert severity="error" className="mt-5 mb-5">{error}</Alert>:null
                        }
              <div className="mb-10">
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email" variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Box>
              </div>
              <button className=" text-white py-1 w-full rounded-md  font-semibold h-10 bg-blue-500" type="submit">Send</button>
  
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
    );
};

export default DoctorForgotPassword;