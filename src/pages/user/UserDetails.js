import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchtuserDetails } from '../../state/user/details/userDetailsSlice';
import { Link } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
const UserDetails = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchtuserDetails({ userToken }));
    }, [dispatch, userToken]);
    const {user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const {isLoading } = useSelector(
        (state) => state.userdetails
    );
 const [avatar, setAvatar] = useState();
     const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    return (
        <div className="p-5 bg-white  lg:mt-44 mb-20">

            <div className="w-full lg:w-3/4 2xl:w-2/4 mx-auto flex justify-center">
                <div className="hidden lg:block w-3/4  mb-5">
                    <UserSidebar></UserSidebar>
                </div>
                {
                    isLoading ? <div className="w-full flex mt-32">

                    <Rings
                        height={60}
                        width={80}
                        color="red"
                        visible={true}
                        secondaryColor="green"
                        className="border ml-36"

                    />
                    {/* <p className="ml-1 mt-2 text-gray-900">please wait a sec</p> */}
                </div>:
                
                <div className="w-full  lg:w-full lg:m-0 mt-12">
                  
                            <div className="w-full  lg:w-full lg:m-0 mt-24">
                                <div className="avatar mr-28">
                                    <div className="w-32 rounded-full  ">
                                        {
                                            user?.avatar ? <img src={user.avatar.url} alt="" /> : <img src={avatarPreview} alt="Avatar Preview" />
                                        }
                                    </div>
                                </div>


                                <div className="w-3/4 mx-auto mt-12">
                                   
                                    {
                                        user?.name?  <p className="text-start text-md text-gray-600 font-medium"> Name : {user.name }</p>:null
                                    }
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                {
                                        user?.email?   <p className="text-start text-md text-gray-600 font-medium"> Email : {user.email }</p>:null
                                    }
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                {
                                        user?.gender? <p className="text-start text-md text-gray-600 font-medium"> Gender: {user.gender }</p>:null
                                    }
                                </div>
                                <div className="w-3/4 mx-auto mt-5">
                                {
                                        user?.phone?  <p className="text-start text-md text-gray-600 font-medium"> Cell No : 0{user.phone }</p>:null
                                    }
                                </div>
                              <Link to="/user/update/profile">
                              
                              <button className="btn btn-sm w-3/4 mx-auto mt-10 bg-blue-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500" >Update Profile</button>
                              </Link>
                            </div>
                    
                </div>}
            </div>

        </div>
    );
};

export default UserDetails;