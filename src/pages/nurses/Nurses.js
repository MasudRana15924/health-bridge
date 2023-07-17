import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterNurses } from '../../state/nurses/nursesSlices';
import Loading from '../loader/Loading';
import Nurse from './Nurse';
import { Rings } from 'react-loader-spinner';
const locations = [
    "Uttara",
    "Dhanmondi",
    "Mirpur",
    "Banani",
    "Gulshan"
];
const Nurses = () => {
    const [location, setLocation] = useState("");
    const [visible, setVisible] = useState(4);
    const loadMore = () => {
        setVisible(visible + 4);
    };
    const dispatch = useDispatch();
    const { nurses,isError, error } = useSelector(state => state.filterNurses.filterNurses);
    const {  isLoading} = useSelector(state => state.filterNurses);
    useEffect(() => {
        dispatch(fetchFilterNurses({ location }));
    }, [dispatch, location])

    let content;
    if (nurses?.length < 0 && isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && nurses?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Doctors Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && nurses?.length > 0) {
        content = nurses.slice(0, visible).map(nurse => <Nurse key={nurse._id} nurse={nurse} />)
    }
    return (
        <section id="#nurses" className="doctors-section mb-10 md:mt-24 lg:mt-4">
            <div className="mt-12 lg:pt-12 md:flex lg:flex justify-between md:w-3/4 lg:w-3/4 mx-auto ">
                <h1 className="text-start ml-5 lg:ml-0 font-semibold text-2xl md:text-2xl lg:text-3xl">Our Best Nurses</h1>
                <div className="hidden">
                    {locations?.map((exp) => (

                        <button
                        className="btn btn-xs mt-5 lg:mt-0 md:mt-0 ml-1 md:ml-5 lg:ml-5 bg-white text-sm font-semibold leading-6 text-black hover:bg-slate-50"
                            key={exp}
                            onClick={() => setLocation(exp)}
                        >
                            {exp}
                        </button>
                    ))}
                </div>
            </div>
            {
                 isLoading ? <div className="w-2/4 lg:w-1/4 mx-auto flex mt-10">

                 <Rings
                     height={40}
                     width={40}
                     color="red"
                     visible={true}
                     secondaryColor="green"
                     className="border"

                 />
                 <p className="ml-1 mt-2 text-gray-900">please wait a sec</p>
             </div>:<div
                className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto  lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-16 " >
                {content}

                <div className="col-span-12 ">
                    {visible && (nurses?.length > 0 && (
                        <button onClick={loadMore} className="btn btn-sm bg-blue-400 border-blue-400 mx-auto  mb-5">Load More</button>
                    ))
                    }
                </div>
            </div>
            }
            
        </section>
    );
};

export default Nurses;