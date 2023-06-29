import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loader/Loading';
import DoctorsList from './DoctorsList';
import { useEffect } from 'react';
import FilterTags from './FilterTags';
import { fetchFilterDoctors } from '../../state/filter/filterSlice';
import FilterFeeses from './FilterFeeses';
import GendersLists from '../DoctorsList/GendersLists';
import Ratings from './Ratings';
import { BsFilterRight } from "react-icons/bs";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import FilterStatus from './FilterStatus';
const DoctorLis = () => {
    const dispatch = useDispatch();
    const { doctors, isLoading, isError, error } = useSelector(state => state.filterDoctors.filterDoctors);
    const { experts, fees, genders, ratingss, search, status } = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchFilterDoctors({ experts, fees, genders, ratingss, search, status }));
    }, [dispatch, experts, fees, genders, ratingss, search, status])

    //decide what to render 
    let content;
    if (isLoading && doctors?.length < 0) content = <Loading></Loading>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !doctors) {
        content = <Loading></Loading>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.map(doctor => <DoctorsList key={doctor._id} doctor={doctor} />)
    }
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active)
    }


    return (
        <div>
            <div className="lg:flex gap-4 lg:mt-10 md:mt-10 mb-20">

                <div className="hidden lg:block lg:w-2/4 mt-16 ">
                    <div className="w-3/4 mx-auto ">
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  mt-8">
                            <FilterStatus></FilterStatus>
                        </div>
                        <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-3">
                            <h2 className="font-semibold text-2xl text-start lg:ml-64">Expert</h2>

                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">

                            <FilterTags></FilterTags>
                        </div>


                    </div>
                    <div className="w-3/4 mx-auto ">

                        <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-5">
                            <h2 className="font-semibold text-2xl mt-1 text-start lg:ml-64">Gender</h2>
                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">

                            <GendersLists></GendersLists>
                        </div>


                    </div>
                    <div className="w-3/4 mx-auto ">

                        <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-5">
                            <h2 className="font-semibold text-2xl mt-1 text-start lg:ml-64"> Fees</h2>
                        </div>

                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">

                            <FilterFeeses></FilterFeeses>
                        </div>

                    </div>
                    <div className="w-3/4 mx-auto ">

                        <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-5">
                            <h2 className="font-semibold text-2xl mt-1 text-start lg:ml-64">Ratings</h2>
                        </div>

                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">

                            <Ratings></Ratings>
                        </div>

                    </div>
                </div>
                {/* for small devices */}
                <div className="w-3/4 mx-auto lg:hidden md:hidden flex justify-between mt-32 ">

                    <h2 className="text-xl font-semibold leading-6 text-gray-900">All Doctors </h2>
                    {/* <button className="btn btn-sm bg-white text-gray-900" >Filter <BsFilterRight className="text-2xl"></BsFilterRight> </button> */}
                    <a href="#my_modal_8" className="btn btn-sm bg-white text-gray-900 hover:bg-white ">Filter <BsFilterRight className="text-2xl"></BsFilterRight></a>
                </div>
                {/* small devices filter */}
                <div className="modal" id="my_modal_8">
                    <div className="modal-box">
                        <div className="modal-action">
                            {
                                doctors?.length ? <p className="text-blue-400 mr-40">All Doctors {doctors.length}</p> : null
                            }
                            <a href="#" className="btn btn-sm border-none text-2xl bg-white text-gray-900 hover:bg-white ">
                                <RxCross1 className="text-black text-xl" ></RxCross1>
                            </a>
                        </div>
                        <div className="ml-5">
                            <div className="lg:block lg:w-3/4 lg:mx-auto  ">
                                <FilterStatus></FilterStatus>
                            </div>

                        </div>
                        <div className="flex  ml-5">
                            <div>
                                <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-3">
                                    <h2 className="font-semibold text-xl text-start lg:ml-64">Expert</h2>

                                </div>
                                <div className="lg:block lg:w-3/4 lg:mx-auto  ">
                                    <FilterTags></FilterTags>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-4">
                                    <h2 className="font-semibold text-xl text-start lg:ml-64">Fees</h2>

                                </div>
                                    <div className=" lg:block lg:w-3/4 lg:mx-auto  ">
                                        <FilterFeeses></FilterFeeses>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5">
                        <div className=" w-full lg:w-3/4 lg:mx-auto">
                                <h2 className=" font-semibold text-xl text-start lg:ml-64 ">Gender</h2>
                            </div>
                            <div className=" lg:block lg:w-3/4 lg:mx-auto ">
                                <GendersLists></GendersLists>
                            </div>
                            <div className="">
                                <div className=" w-full lg:w-3/4 lg:mx-auto">
                                    <h2 className="font-semibold text-xl text-start lg:ml-64">Ratings</h2>
                                </div>
                                <div className=" lg:block lg:w-3/4 lg:mx-auto  ">
                                    <Ratings></Ratings>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className=" md:w-full lg:w-full mt-20 md:mt-20 lg:mt-20 ">
                    {
                        content
                    }
                </div>
            </div>
        </div>
    );
};

export default DoctorLis;