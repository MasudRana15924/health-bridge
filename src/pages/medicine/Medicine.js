import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterMedicne } from '../../state/medicine/FilterMedicineSlice';
import Medicines from './Medicines';
import Loading from '../loader/Loading';
import { Link } from 'react-router-dom';
import { BsBag } from "react-icons/bs";
import { TextField } from '@mui/material';
const Medicine = () => {
    const dispatch = useDispatch();
    const { medicines, isLoading } = useSelector(state => state.medicines.medicines);
    useEffect(() => {
        dispatch(fetchFilterMedicne());
    }, [dispatch])
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    let content;
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
    return (
        <section className="pt-12 mb-10 lg:mt-16">
            <div className="flex justify-between p-5 w-full lg:w-2/4 mx-auto ">
            <TextField label="Search " variant="filled"  focused className="w-3/4 lg:w-2/4"/>
                <div>
                    <Link
                        to="/cart"
                        className="text-sm  leading-6 text-gray-900 me-10"
                    >
                        {" "}
                        <div className="flex mt-4">

                            <BsBag className="h-6 w-6"> </BsBag>
                            <span className="ml-1"> {cartTotalQuantity} </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div
                className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-2/4 mx-auto  lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-12 " >
                {content}


            </div>
        </section>
    );
};

export default Medicine;