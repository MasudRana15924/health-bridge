import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../state/medicine/cartSlice';
import { useNavigate } from 'react-router-dom';
import cartImg from '../../images/carts.png'
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { createOrder } from '../../state/order/orderSlice';

const Shipping = () => {
    const navigate = useNavigate()
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
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

    const itemsPrice = cart.cartItems.reduce(
        (acc, item) => acc + item.cartQuantity * item.price,
        0
    );
    const shippingPrice = 60;
    const totalPrice = itemsPrice + shippingPrice;
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');
    const shippingInfo = { name, phone, address, city, }
    const orderItems = cart.cartItems;
    const data = { shippingInfo, orderItems, itemsPrice, shippingPrice, totalPrice, paymentInfo }
    const CreateOrder = (e) => {
        e.preventDefault();
        if (name && address && phone && city) {
            dispatch(createOrder({ data, userToken }));
            dispatch(clearCart());
        } else {
            // toast.error('Please enter your details', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
        }

    }
    const paymentInfos = [
        {

            label: 'Select Payment Method ',
        },
        {
            value: 'Cash On Delivery',
            label: 'Cash On Delivery',
        },
        {
            value: 'Bkash',
            label: 'Bkash',
        },
        {
            value: 'Nagad',
            label: 'Nagad',
        },
    ];
    console.log(paymentInfo);
    const { order } = useSelector(state => state.order);
    useEffect(() => {
        if (paymentInfo === 'Bkash' || paymentInfo === 'Nagad') {
            if (order[0]) {
                window.location.replace(order[0].url);
            }
        }
    }, [order, navigate, paymentInfo])

    return (
        <div className="mt-20 lg:mt-52 lg:w-3/4 mx-auto mb-20 lg:flex">


            <form action="" className="p-3 lg:p-0  w-full mx-auto lg:w-2/4 " onSubmit={CreateOrder}>
                <p className="text-start text-2xl">Shipping Details</p>
                <div className="mt-10">
                    <TextField
                        id="filled-basic"
                        select
                        // label="Gender"
                        defaultValue="EUR"
                        SelectProps={{
                            native: true,
                        }}
                        variant="filled"
                        className="bg-white w-full "
                        onChange={(e) => setPaymentInfo(e.target.value)}
                    >
                        {paymentInfos.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <div className="mt-10">
                    <TextField id="filled-basic" label="Your Name" variant="filled" className="w-full" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mt-5">
                    <TextField id="filled-basic" label="Location (house,road,sector)" variant="filled" className="w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mt-5">
                    <TextField id="filled-basic" label="City" variant="filled" className="w-full mt-5" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="mt-5">
                    <TextField id="filled-basic" label="Phone No" variant="filled" className="w-full mt-5" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mt-5 w-full">
                    <Button variant="contained" className="w-full" onClick={CreateOrder}>Confirm</Button>
                </div>
            </form>

            {cart.cartItems?.length > 0 ?
                <div>
                    <div className="w-full">
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
        </div>
    );
};

export default Shipping;