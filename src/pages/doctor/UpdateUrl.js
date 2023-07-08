import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import UserSidebar from '../user/UserSidebar';
import { updateDoctorUrl } from '../../state/doctors/updateUrlSlice';



const UpdateUrl = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
  );
  const userToken = loggeduser.token
  const [url, setUrl] = useState("");
  const data = ({ url })
  const registerSubmit = (e) => {
    e.preventDefault();
    if (data && userToken) {
      dispatch(updateDoctorUrl({ data, userToken }));
      toast.success('Url updated ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
      <div class="w-full lg:w-full 2xl:w-3/4 mx-auto flex justify-center">
        <div className="hidden lg:block w-1/4  mb-5">
          <UserSidebar></UserSidebar>
        </div>
        <div className="w-full lg:w-3/4 lg:ml-12">
          <div class="bg-white lg:w-2/4">
            <h2 class=" mb-5 text-2xl font-medium  text-start mt-10">Update Meet Link</h2>
            <form onSubmit={registerSubmit}>
              <div class="mb-4">
                <input class="border border-gray-200 w-full h-10 rounded p-3" type="text" id="username"
                  name="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter Your Google Meet Link"
                  required
                />
              </div>
              <button class="border-2 border-blue-500 text-white py-1 w-full rounded-md  font-semibold h-10 bg-blue-500 mt-5 mb-10" type="submit">Update </button>
            </form>
          </div>
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
        theme="dark"
        className="w-2/4"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default UpdateUrl;
