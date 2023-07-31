import React from 'react';
import UserSidebar from './UserSidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../state/user/updateprofile/updateProfileSlice';
import { TextField } from '@mui/material';


const UpdateProfile = () => {
  const { loggeduser } = useSelector(
    (state) => state.userDetails
  );
  const user = loggeduser.user;
  const userToken = loggeduser.token
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const data = ({avatar, name, email,gender,phone })
  const updateUser = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ data, userToken }));
    toast.success('Your Info Updated', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    },
    );
  };
  const doctorProfileUpdate = (e) => {
    e.preventDefault();
  }
  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="p-5 bg-white  lg:mt-44 mb-20">
    <div className="w-full lg:w-3/4 2xl:w-2/4 mx-auto flex justify-center">
                <div className="hidden lg:block w-3/4  mb-5">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="w-full  lg:w-full lg:m-0 mt-12">
                    {
                        user?.role === 'doctor' ? <form onSubmit={doctorProfileUpdate}>
                            <div className="w-full  lg:w-full lg:m-0">
                                <div className="avatar mr-28">
                                    <div className="w-32 rounded-full  ">
                                        {
                                            user?.avatar ? <img src={user.avatar.url} alt="" /> : <img src={avatarPreview} alt="Avatar Preview" />
                                        }

                                    </div>

                                </div>
                                <div className="w-3/4 mx-auto">
                                    <TextField id="input-with-sx" variant="standard" label={user.title} className="w-full py-3 px-6" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto">
                                    <TextField id="input-with-sx" variant="standard" label={user.name} className="w-full py-3 px-6" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label={user.email} variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label={user.degree} variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label={user.expert} variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label={user.work} variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label={user.gender} variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto">
                                    <TextField id="input-with-sx" variant="standard" label={user.phone} className="w-full py-3 px-6" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <button className="btn btn-sm w-3/4 mx-auto mt-10 bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500">Update</button>

                            </div>
                        </form> : <form onSubmit={updateUser}>
                            <div className="w-full  lg:w-full lg:m-0 mt-24">
                                <div className="avatar mr-28">
                                    <div className="w-32 rounded-full  ">
                                        {
                                            user?.avatar ? <img src={user.avatar.url} alt="" /> : <img src={avatarPreview} alt="Avatar Preview" />
                                        }
                                    </div>
                                </div>


                                <div className="w-3/4 mx-auto">
                                    <TextField id="input-with-sx" variant="standard" label="Name" className="w-full py-3 px-6" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label="Email" variant="standard" className="w-full py-3 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label="Gender" variant="standard" className="w-full py-3 px-6" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                    <TextField id="input-with-sx" label="Phone" variant="standard" className="w-full py-3 px-6" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <button className="btn btn-sm w-3/4 mx-auto mt-10 bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500" onClick={updateUser}>Update</button>
                            </div>
                        </form>
                    }
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

export default UpdateProfile;