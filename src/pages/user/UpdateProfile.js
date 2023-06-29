import React from 'react';
import UserSidebar from './UserSidebar';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../state/user/updateprofile/updateAvatarSlice';

const UpdateProfile = () => {
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const dispatch = useDispatch();
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
  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("avatar", avatar);
    dispatch(updateAvatar(myForm));
    alert('success')
};
  return (
    <div className="p-10 bg-white mt-20 mb-20">
      <div className="max-w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
          <div className="hidden lg:block  lg:w-8/12 lg:mx-auto text-end  mb-5 mt-20">
            <UserSidebar></UserSidebar>

          </div>
          <div className="lg:w-8/12 mb-5 mt-32 p-5">
            <form action="" onSubmit={updateProfileSubmit}>
            <div className="bg-white  p-8">
              <div className="avatar mr-28">
                <div className="w-32 rounded-full  ring-offset-base-100 ring-offset-2">
                  <img src={avatarPreview} alt="Avatar Preview" />
                </div>
              </div>
              <div>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updateProfileDataChange}
                  className="mt-5 ms-3 text-sm "
                />

              </div>
              <button className="btn w-3/4 mt-10" >Update</button>
            </div>
            </form>
            
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

export default UpdateProfile;