import React from 'react';
import DoctorDetails from '../../components/doctor/DoctorDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDoctor } from '../../state/doctor/doctorSlice';
import Loading from '../loader/Loading';
import RelatedDoctors from '../../components/related/RelatedDoctors';



const SingleDoctor = () => {
    const dispatch = useDispatch();
    const { doctorId } = useParams()
    const { doctor, isLoading, isError, error } = useSelector(state => state.doctor.doctor);
    const { _id, expert } = doctor || {}
    useEffect(() => {
        dispatch(fetchDoctor(doctorId))
    }, [dispatch, doctorId])
    let content;
    if (isLoading){
        content = <Loading></Loading>;
    }
   
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !doctor?._id) {
        content = <div className="col-span-12"><Loading></Loading></div>
    }
    if (!isLoading && !isError && doctor?._id) {
        content = <div>
            <DoctorDetails doctor={doctor}></DoctorDetails>

        </div>
    }
    return (
        <section className="w-3/4 mx-auto pt-6 pb-20 mt-24">
            {content}
            <div className="mt-48">
                {/* <h2 className="text-start text-3xl text-red-500">Related Doctors </h2> */}
                {/* <RelatedDoctors expert={expert} id={_id}> </RelatedDoctors> */}
            </div>
        </section>
    );
};
export default SingleDoctor;