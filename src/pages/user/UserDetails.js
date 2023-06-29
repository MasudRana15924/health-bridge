import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../state/user/updateprofile/updateProfileSlice';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';
const UserDetails = () => {
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
    const data = ({ name, gender, phone, birthdate, avatar })
    const registerSubmit = (e) => {
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
        <div className="p-10 bg-white  mt-16 lg:mt-44 mb-20">

            <div className="w-full lg:w-2/4 mx-auto flex justify-center">
                <div className="hidden lg:block w-3/4  mb-5">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="w-full  lg:w-full lg:m-0">
                    <form onSubmit={registerSubmit}>
                        <div className="w-full  lg:w-full lg:m-0">
                            <div className="avatar mr-28">
                                <div className="w-32 rounded-full  ">
                                    {
                                        user?.avatar ? <img src={user.avatar.url} alt="" /> :  <img src={avatarPreview} alt="Avatar Preview" />
                                    }
                                    
                                </div>
                                
                            </div>

                            <div className="w-3/4 mx-auto">
                            <TextField id="input-with-sx"  variant="standard" label={user.name} className="w-full py-3 px-6"  value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="w-3/4 mx-auto mt-12">
                            <TextField id="input-with-sx" label={user.email} variant="standard" className="w-full py-3 px-6"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            {/* <div>
                                        <input
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            onChange={updateProfileDataChange}
                                            className="mt-5 ms-3 text-sm "
                                        />

                                    </div> */}
                            {/* <div className="w-3/4 mx-auto">
                                <div className="mb-2 ">
                                    <p className="text-start text-sm text-blue-300 mt-5">What is your Name?</p>
                                    <input className="border border-gray-200 w-full h-10 rounded p-3 " type="text" id="username"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={user.name}
                                        required
                                    />
                                </div>
                                <div className="mb-2 ">
                                    <p className="text-start text-sm text-blue-300 mt-5">What is your Name?</p>
                                    <input className="border border-gray-200 w-full h-10 rounded p-3 " type="text" id="username"
                                        name="name"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={user.email}
                                        required
                                    />
                                </div>
                                <div className="mb-2 ">
                                    <p className="text-start text-sm text-blue-300 mt-5">What is your Gender?</p>
                                    <select name="Gender" className="w-full h-12 border rounded" value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <option  >Select Gender </option>
                                        <option  >Male </option>
                                        <option >Female </option>
                                    </select>
                                </div>
                                <div className="mb-2 mt-5">
                                    <p className="text-start text-sm text-blue-300 ">What is your Phone?</p>
                                    <input className="border border-gray-200 w-full h-10 rounded p-3 " type="text" id="username"
                                        name="name"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter Your Phone Number"
                                        required
                                    />
                                </div>
                                <div className="mb-2 ">
                                    <p className="text-start text-sm text-blue-300 mt-5">What is your Birthdate?</p>
                                    <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="date" id="username"
                                        name="name"
                                        value={birthdate}
                                        onChange={(e) => setBirthdate(e.target.value)}
                                        placeholder="Birth Date"
                                        required
                                    />
                                </div>
                                <button className=" text-white py-1 w-full rounded-md  font-semibold h-10 bg-blue-500 mt-5" type="submit">Update</button>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;