import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorApponitments } from '../../state/doctors/appointmentSlice';
import Loading from '../loader/Loading';
import UserSidebar from '../user/UserSidebar';
import DoctorAppointment from '../../components/doctor/DoctorAppointment';


const DoctorAppointments = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { appointment, isLoading, isError, error } = useSelector(state => state.doctorAppointments.doctorAppointments);
    useEffect(() => {
        dispatch(fetchDoctorApponitments({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && appointment?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-2/4 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Appointments Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && appointment?.length > 0) {

        content = appointment.map(booking => <DoctorAppointment key={booking._id} booking={booking} />)
    }
    return (
        <div className="lg:p-10 bg-white mt-24 lg:mt-32 mb-20">
        <div className="">
            <div className="w-full lg:w-3/4 lg:mx-auto flex justify-center">
                <div className="hidden lg:block w-1/4 text-end  mb-5">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="w-full m-5 lg:w-3/4 lg:m-0">
                    <h2 className="text-start lg:text-2xl ">Consultations History</h2>
                    <div className="w-full grid grid-cols-12 mt-5 lg:mt-10">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DoctorAppointments;

