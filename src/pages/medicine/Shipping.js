import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,  decreaseCart, getTotals, removeFromCart } from '../../state/medicine/cartSlice';
import { Link } from 'react-router-dom';
import cartImg from '../../images/carts.png'
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

const Shipping = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAdd = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecrease = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    };


    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const [city,setCity]=useState('')
  const CreateOrder=(e)=>{
    e.preventDefault();

  }
    return (
        <div className="mt-20 lg:mt-52 lg:w-2/4 mx-auto mb-20 lg:flex">

            {cart.cartItems?.length > 0 ?
                <div>
                    <div className="">
                        <p className="text-start text-2xl  ml-3">Order Review</p>
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                                <div className=" pl-3 pr-3 w-full mx-auto mt-5">
                                    <div className="w-full  mx-auto border flex justify-between mb-10">
                                        <div className="w-2/4">
                                            <img src={cartItem.image.url} alt={cartItem.name} className="h-32 w-44" />
                                        </div>
                                        <div className="w-full">
                                            <div className="flex justify-between mt-5">
                                                <h3 className="text-gray-900 text-start font-semibold">{cartItem.name}</h3>
                                                <button onClick={() => handleRemove(cartItem)}>
                                                    <CiCircleRemove className="text-red-500 text-xl mt-1 mr-2 lg:mr-5"></CiCircleRemove>
                                                </button>
                                            </div>
                                            <div>
                                                <h3 className="text-start mt-5">
                                                    {cartItem.price}.00 * {cartItem.cartQuantity}
                                                    <span className="ml-10"> = {cartItem.price * cartItem.cartQuantity} tk</span>
                                                </h3>
                                            </div>
                                            <div className="mt-5 mr-40 ">
                                                <button className='mr-5' onClick={() => handleAdd(cartItem)}>
                                                    <CiCirclePlus className="text-2xl lg:text-4xl text-blue-400"></CiCirclePlus>
                                                </button>
                                                <button className='desCart' onClick={() => handleDecrease(cartItem)}>
                                                    <CiCircleMinus className="text-2xl lg:text-4xl text-red-500"></CiCircleMinus>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))}

                        
                    </div>

                </div> : <div className="w-ful mb-20">
                    <img src={cartImg} alt="" className="w-3/4 lg:w-1/4 mx-auto h-52" />
                    <p className="mt-10 text-red-500 font-bold">Your Cart is Currently Empty</p>
                </div>
            }



            <form action="" className="p-3 lg:p-0  w-full mx-auto lg:w-2/4 " onSubmit={CreateOrder}>
               <p className="text-start text-2xl">Shipping Details</p>

                <div className="mt-5">
                    <TextField id="filled-basic" label="Your Name" variant="filled" className="w-full" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mt-5">
                    <TextField id="filled-basic" label="Complete Address" variant="filled" className="w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mt-5">
                    <TextField id="filled-basic" label="City" variant="filled" className="w-full mt-5" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="mt-5">
                    <TextField id="filled-basic" label="Phone No" variant="filled" className="w-full mt-5" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mt-5 w-full">
                    <Button variant="contained" className="w-full">Confirm</Button>
                </div>
            </form>
        </div>
    );
};

export default Shipping;