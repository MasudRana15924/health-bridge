import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loader/Loading';
import DoctorsList from './DoctorsList';
import { useEffect } from 'react';
import { fetchFilterDoctors } from '../../state/filter/filterSlice';
import FilterFeeses from './FilterFeeses';
import GendersLists from '../DoctorsList/GendersLists';
import Ratings from './Ratings';
import { BsFilterRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import FilterStatus from './FilterStatus';
import { Alert } from '@mui/material';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
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
    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="w-full p-5 lg:p-0 lg:w-1/4 lg:mt-24">
            <Alert severity="error" >No Doctors Found</Alert>
        </div>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.map(doctor => <DoctorsList key={doctor._id} doctor={doctor} />)
    }
    const handleReload = (e) => {
        window.location.replace('/doctors')
    }

    return (

            <div className="lg:flex justify-between 2xl:w-3/4 mx-auto gap-4 lg:mt-10 md:mt-10 mb-20">
                <div className="hidden lg:block lg:w-1/4 mt-24 ">
                <div className="">
                <button className="btn btn-sm bg-white hover:bg-white mr-12 lg:mr-5 text-md font-bold text-gray-900 mb-5" onClick={handleReload}> <ClearAllOutlinedIcon className=" text-red-700 h-10"></ClearAllOutlinedIcon> Reset Filter </button>
                </div>
                <div className=" lg:w-3/4 mx-auto lg:ml-12 2xl:ml-14">
                    
                    <FilterStatus></FilterStatus>

                    {/* <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-3">
                            <h2 className="font-semibold text-2xl text-start lg:ml-64">Expert</h2>
                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                            <FilterTags></FilterTags>
                        </div> */}
                </div>
                    <div className="w-3/4 mx-auto ">
                        <div className=" w-full lg:w-3/4 lg:mx-auto mt-5">
                            <h2 className="font-semibold text-xl mt-1 text-start ">Gender</h2>
                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                            <GendersLists></GendersLists>
                        </div>
                    </div>
                    <div className="w-3/4 mx-auto ">
                        <div className=" w-full lg:w-3/4 lg:mx-auto mt-5">
                            <h2 className="font-semibold text-xl mt-1 text-start "> Fees</h2>
                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                            <FilterFeeses></FilterFeeses>
                        </div>
                    </div>
                    <div className="w-3/4 mx-auto ">
                        <div className=" w-full lg:w-3/4 lg:mx-auto mt-5">
                            <h2 className="font-semibold text-xl mt-1 text-start ">Ratings</h2>
                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                            <Ratings></Ratings>
                        </div>
                    </div>
                </div>
                {/* for small devices */}
                <div className="pr-5 pl-5 mx-auto lg:hidden md:hidden flex justify-between mt-24 ">

                    <h2 className="text-xl  leading-6 text-gray-900 mt-1">All Doctors </h2>

                    {/* <button className="btn btn-sm bg-white text-gray-900" >Filter <BsFilterRight className="text-2xl"></BsFilterRight> </button> */}
                    <a href="#my_modal_8" className="btn btn-sm border-white bg-white text-gray-900 hover:bg-white ">Filter <BsFilterRight className="text-2xl"></BsFilterRight></a>
                </div>
                {/* small devices filter */}
                <div className="modal" id="my_modal_8">
                    <div className="modal-box">
                        <div className= "">
                        <button className="mr-48 text-md font-thin text-gray-900 " onClick={handleReload}> <ClearAllOutlinedIcon className=" text-red-500 h-10"></ClearAllOutlinedIcon> Reset Filter </button>
                        </div>
                        <div className="modal-action">
                       
                            {
                                doctors?.length ? <p className="text-blue-400 mr-40">All Doctors {doctors.length}</p> : null
                            }
                            <a href="#" className="btn btn-sm border-none text-2xl bg-white text-gray-900 hover:bg-white ">
                                <RxCross1 className="text-black text-xl" ></RxCross1>
                            </a>
                        </div>
                        <div className="">
                            <div className="lg:block lg:w-3/4 lg:mx-auto  ">
                                <FilterStatus></FilterStatus>
                            </div>

                        </div>
                        {/* <div className="flex  ml-5">
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
                        </div> */}
                        <div className="">
                            <div>
                                <div className="">
                                    <div className="w-full lg:w-3/4 lg:mx-auto mt-4">
                                        <h2 className="font-semibold text-md text-start lg:ml-64">Fees</h2>

                                    </div>
                                    <div className=" lg:block lg:w-3/4 lg:mx-auto  ">
                                        <FilterFeeses></FilterFeeses>
                                    </div>
                                </div>
                            </div>

                            <div className=" w-full lg:w-3/4 lg:mx-auto">
                                <h2 className=" font-semibold text-md text-start lg:ml-64 ">Gender</h2>
                            </div>
                            <div className=" lg:block lg:w-3/4 lg:mx-auto ">
                                <GendersLists></GendersLists>
                            </div>
                            <div className="">
                                <div className=" w-full lg:w-3/4 lg:mx-auto">
                                    <h2 className="font-semibold text-md text-start lg:ml-64">Ratings</h2>
                                </div>
                                <div className=" lg:block lg:w-3/4 lg:mx-auto  ">
                                    <Ratings></Ratings>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="w-full md:w-full lg:w-full mt-12 md:mt-20 lg:mt-20 lg:ml-16">
                    {
                        content
                    }
                </div>
            </div>


    );
};

export default DoctorLis;