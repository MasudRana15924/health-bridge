import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedDoctors } from '../../state/relatedDoctor/relatedDoctorSlice';
import { useEffect } from 'react';
import Loading from '../../pages/loader/Loading';
import RelatedDoctor from './RelatedDoctor';

const RelatedDoctors = ({ expert, id }) => {
    const dispatch = useDispatch();
    const { relatedDoctors, isLoading, isError, error } = useSelector(state => state.relatedDoctors);
    useEffect(() => {
        dispatch(fetchRelatedDoctors({ expert, id }))
    }, [dispatch, expert, id])
    const doctors = relatedDoctors.doctors
    let content = null;
    if (isLoading) content = <Loading></Loading>;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    }
    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="col-span-6"><div class="alert alert-error shadow-lg  mt-5 h-12 ml-5">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>No Doctors Found</span>
            </div>
        </div> </div>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.map(doctor => <RelatedDoctor key={doctor._id} doctor={doctor} />)
    }
    return (
        <div>
            <h2 className="text-start text-3xl text-slate-600">Related Doctors </h2>
            <div className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0  lg:w-3/4   lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-16">
                {content}

            </div>
        </div>
    );
};

export default RelatedDoctors;