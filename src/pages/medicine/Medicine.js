import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterMedicne } from '../../state/medicine/FilterMedicineSlice';
import Medicines from './Medicines';
import Loading from '../loader/Loading';
import { Link } from 'react-router-dom';
import { BsBag, BsSearch } from "react-icons/bs";
import { Button } from '@mui/material';
import { useState } from 'react';
import { searched } from '../../state/filter/filterReducer';
import { Rings } from 'react-loader-spinner';
const Medicine = () => {
    const dispatch = useDispatch();
    const { medicines } = useSelector(state => state.medicines.medicines);
    const {isLoading } = useSelector(state => state.medicines);
    const { search } = useSelector(state => state.filter);
  console.log(medicines);
    const [input, setInput] = useState(search);
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searched(input));
    }
    useEffect(() => {
        dispatch(fetchFilterMedicne({ search }));
    }, [dispatch, search])
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    let content;
    if(isLoading && medicines?.length < 0){
        content = <Loading></Loading>
    }
    if (medicines?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-black">No Medicine Found</span>
            </div>
        </div>
    }
    if (!isLoading && !medicines) {
        content = <Loading></Loading>
    }
    if (medicines?.length > 0) {
        content = medicines.map(medicine => <Medicines key={medicine._id} medicine={medicine} />)
    }
    const Reset = () => {
        window.location.reload();
    }
    return (
        <section className="pt-12 mb-10 lg:mt-16">
            <div className="flex justify-between pl-5 pr-5 mt-3 w-full lg:w-3/4 2xl:w-2/4 mx-auto ">
               
                <form className='w-3/4 lg:w-2/4 2xl:w-2/4 flex'>
                    <input
                        className="outline-none border border-blue-200  w-full h-10 pl-5"
                        type="search"
                        name="search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search"
                    />
                    <button onClick={handleSearch} className="btn btn-sm  bg-blue-500 border-blue-500 hover:bg-blue-500 hover:border-blue-500 h-10 w-20 absolute ml-52 lg:ml-96"><BsSearch></BsSearch></button>

                </form>
                <div className="mr-40 mt-1 hidden lg:block">
                    <Button variant="outlined" size="small" className="h-8 mr-20" onClick={Reset}>
                        Reset
                    </Button>
                </div>
                <div>
                    <Link
                        to="/cart"
                        className="text-sm  leading-6 text-gray-900 me-10"
                    >
                        {" "}
                        <div className="flex mt-3 lg:mt-1">

                            <BsBag className=" h-4 w-4 lg:h-6 lg:w-6"> </BsBag>
                            <span className="ml-1 text-sm"> {cartTotalQuantity} </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-1/4 lg:hidden">
                <Button variant="outlined" size="small" className="h-6" onClick={Reset}>
                    Reset
                </Button>
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
                className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-3/4 2xl:w-2/4 mx-auto  lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-12 " >
                {content}
            </div>
            }
            
        </section>
    );
};

export default Medicine;