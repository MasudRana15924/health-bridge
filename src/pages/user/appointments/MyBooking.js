import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApponitments } from '../../../state/user/appointment/myAppointmentsSlice';
import Loading from '../../loader/Loading';
import UserSidebar from '../UserSidebar';
import MyBookings from '../../../pages/user/appointments/MyBookings';
import { Alert, AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';




const MyBooking = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { appointment, isLoading, isError, error } = useSelector(state => state.myAppointments.myAppointments);
    useEffect(() => {
        dispatch(fetchApponitments({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && appointment?.length === 0) {
        content = <div className="col-span-12  ">
           <div class=" mt-5 h-12 lg:w-2/4 ">
                <Alert severity="error">
                    <AlertTitle className="text-start">Error</AlertTitle>
                   No Consultations found — <Link to="/doctors"><strong>take consultations!</strong></Link>
                </Alert>
            </div>
        </div>
    }

    if (!isLoading && !isError && appointment?.length > 0) {

        content = appointment.map(booking => <MyBookings key={booking._id} booking={booking} />)
    }
    return (
        <div className="lg:p-10 bg-white mt-16 lg:mt-44 mb-20">

            <div className="w-full lg:w-full 2xl:w-3/4 lg:mx-auto flex justify-center">
                <div className="hidden lg:block w-1/4  2xl:w-1/4 mb-5">
                    <UserSidebar className="w-full"></UserSidebar>
                </div>
                <div className="w-full m-5 lg:full lg:ml-12">
                    <h2 className="text-start lg:text-2xl ">My Consultations History</h2>
                    <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-5">
                        {content}
                    </div>
                </div>
            </div>
    </div>
    );
};

export default MyBooking;