import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Doctors from './Doctors';
import Loading from '../loader/Loading';
import { useState } from 'react';
import { fetchDoctors } from '../../state/doctor/doctorsSlice';


const Doctor = () => {

    const [visible, setVisible] = useState(4);
    const loadMore = () => {
        setVisible(visible + 4);
    };
    const dispatch = useDispatch();
    const { doctors, isLoading, isError, error } = useSelector(state => state.doctors.doctors);
    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch])


    let content;
    if (isLoading){
        content = <Loading></Loading>;
    }
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (isLoading && doctors<0) {
        content = <Loading></Loading>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.slice(0, visible).map(doctor => <Doctors key={doctor._id} doctor={doctor} />)
    }
    return (

        <section className="doctors-section mb-5 lg:mb-10 lg:p-5 2xl:p-0">
            <div className="lg:flex lg:justify-between lg:w-3/4 2xl:w-3/4 mx-auto ">
                <h1 className="text-start ml-3 lg:ml-0 font-semibold lg:font-bold text-2xl lg:text-3xl ">Our Best Doctors</h1>
            </div>
            <div
                className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto 2xl:w-3/4 2xl:mx-auto lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-16" >
                {content}
                <div className="col-span-12 ">
                    {visible && (doctors?.length > 0 && (
                        <button onClick={loadMore} className="btn btn-sm bg-violet-600 border-violet-600 mx-auto mt-5 mb-10">Load More</button>
                    ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;