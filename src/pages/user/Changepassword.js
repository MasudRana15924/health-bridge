import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../state/user/changePassword/updatePasswordSlice';
import { ToastContainer, toast } from 'react-toastify';
import Alert from '@mui/material/Alert';



const Changepassword = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
  );
  const { error } = useSelector(
    (state) => state.updatePassword
  );
  const userToken = loggeduser.token
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = ({ oldPassword, newPassword, confirmPassword })
  const registerSubmit = (e) => {
    e.preventDefault();
    if (data && userToken) {
      dispatch(updatePassword({ data, userToken }));
    } else {
      toast.error('Please enter your details', {
        position: "top-center",
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



  return (
    <div className="p-10 bg-white mt-16 lg:mt-44 mb-20">

      <div class="w-full lg:w-3/4 2xl:w-2/4 mx-auto flex justify-center">
        <div className="hidden lg:block w-3/4  mb-5">
          <UserSidebar></UserSidebar>
        </div>
        <div className=" w-full m-5 lg:w-full lg:m-0">
          <div class="bg-white lg:w-3/4">
            <h2 class=" mb-5 text-2xl font-medium  text-start mt-10">Change Password</h2>
            {
              error? <Alert severity="error" className="mt-5 mb-5 text-start">{error}</Alert> :null
            }
            {/* <Alert severity="error" className="mt-5 mb-5">{error}</Alert>  */}
            <form onSubmit={registerSubmit}>
              <div class="mb-4">

                <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="username"
                  name="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter Your Old Password"
                  required
                />
              </div>

              <div class="mb-4">

                <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                  name="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter Your New Password"
                  required
                />
              </div>
              <div class="mb-4">

                <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                  name="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Your Password"
                  required
                />
              </div>
              <button class="border-2 border-blue-500 text-white py-1 w-full rounded-md  font-semibold h-10 bg-blue-500 mt-5 mb-10" type="submit">Change Password</button>

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

export default Changepassword;