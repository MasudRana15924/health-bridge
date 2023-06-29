import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleAppointment from '../../../pages/admin/appointment/SingleAppointment';
import Loading from '../../loader/Loading';
import { fetchSingleAppointments } from '../../../state/admin/SingleAppointmentSlice';
import UserSidebar from '../../user/UserSidebar';

const SingleAppointments = () => {
    const dispatch = useDispatch();
    const { appointmentId } = useParams()
    const { appointment, isLoading, isError, error } = useSelector(state => state.singleAppointments.singleAppointments);

    useEffect(() => {
        dispatch(fetchSingleAppointments(appointmentId))
    }, [dispatch, appointmentId])
    let content;
    if (isLoading) content = <Loading></Loading>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !appointment?._id) {
        content = <div className="col-span-12">No doctor found ! </div>
    }
    if (!isLoading && !isError && appointment?._id) {
        content = <div>
            <SingleAppointment appointment={appointment}></SingleAppointment>

        </div>
    }
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="flex">
                <div className="w-1/4">
                    <UserSidebar></UserSidebar>
                </div>

                <div className="w-3/4 ">
                    <p className="text-start font-bold mb-5 text-2xl">Update Appointment</p>
                    <div className=" mt-10">
                        {content}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleAppointments;