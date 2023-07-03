import React from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '../../state/medicine/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
const Medicines = ({medicine}) => {
    const dispatch = useDispatch();
    const handleCart=(product)=>{
        dispatch(addToCart(product));
        dispatch(getTotals())
        toast.success("Added To Cart")
    }
    return (
        <div className=" col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4  ">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link >
                        <img
                            src={medicine.image.url}
                            className="w-full h-48 border rounded border-slate-100"
                            alt={medicine.name}
                        />
                    </Link>
                </div>

                <div className=" lg:block md:block text-start p-5">
                    <p className="text-slate-400 text-sm font-sm">{medicine.type}</p>
                    <Link to={`/medicine/${medicine._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2" >
                            {medicine.name}
                        </p>
                    </Link>
    
                    <div className="flex justify-between gap-2">
                        {/* < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt> */}
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2" >
                            Price {medicine.price}Tk
                        </p>
                        {
                    medicine?.quantity > 0 ?
           
                      <BsBag className="h-4 w-4 mt-3" onClick={() => handleCart(medicine)}> </BsBag>
                     :null
                   }
                    </div>
                    
                 

                
                </div>
               
            

            </div>
            <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
};

export default Medicines;