import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.css'
import { createSignUp } from '../../state/user/signupSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const UserSignup = () => {
  const dispatch = useDispatch();
  const { success } = useSelector(
    (state) => state.signup
  );
  const navigate = useNavigate()
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(createSignUp(myForm));
    toast.success('Account create successfully');
  };
  const registerDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    if (success) {
      navigate('/user-signin');
    }
  }, [success, navigate]);
  return (
    <div>

      <div className="mt-5 lg:mt-12 flex flex-col items-center justify-center min-h-screen ">
        <div className="lg:w-3/12 ">
          <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Register</h2>
          <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
            <div className="lg:w-1/4 mx-auto mt-12">
              <div className="w-1/4 mx-auto lg:w-full">
              <img src={avatarPreview} alt="Avatar Preview" className="h-16 w-16 mb-5 border rounded-full" />
              </div>
             <div className="">
             <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
                className="lg:mr-20"
              />
             </div>
            </div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Name" variant="standard" className="w-full py-3 px-6"  value={name} onChange={(e) => setName(e.target.value)}/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Email" variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockOpenIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Password" variant="standard" className="w-full py-3 px-6" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Box>
            <div className="flex items-center justify-between ">
              <div className="flex items-center mt-5">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="h-4 w-4 text-violet-700 focus:ring-violet-700 border-gray-300 ml-1"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>
            <div>
              <button className=" btn btn-md w-full  bg-blue-500 border-blue-500 hover:bg-blue-500 hover:border-blue-500 mb-5">
                <span className="font-semibold text-white text-lg">Signup</span>
              </button>
              <span className="text-sm tracking-wide text-gray-400 mt-5">Already have a account ?</span> <Link to="/user-signin"><span className="text-sm font-semibold leading-6 text-gray-900">Please Login</span>
              </Link>
            </div>
          </form>
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
    </div>
  );
};

export default UserSignup;
