import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../state/medicine/cartSlice';
import { Link } from 'react-router-dom';
import cartImg from '../../images/carts.png'
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import { Button } from '@mui/material';


const Cart = () => {
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
    const handleClear = () => {
        dispatch(clearCart());
    };
    return (
        <div className=" mt-20 lg:mt-48">
            {/* <h2 className="text-start text-black">Shopping Cart</h2> */}
            {cart.cartItems?.length > 0 ?
                <div>
                    <div className="">
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                                <div className="w-full pl-3 pr-3 lg:w-3/4 mx-auto">
                                    <div className="w-full lg:w-2/4 mx-auto border flex justify-between mb-10">
                                        <div className="w-2/4">
                                            <img src={cartItem.image.url} alt={cartItem.name} className="h-32 w-44" />
                                        </div>
                                        <div className=" w-2/4">
                                            <div className="flex justify-between mt-5">
                                                <h3 className="text-gray-900 text-start font-semibold">{cartItem.name}</h3>
                                                <button onClick={() => handleRemove(cartItem)}>
                                                    <CiCircleRemove className="text-red-500 text-xl mt-1 mr-2 lg:mr-5"></CiCircleRemove>
                                                </button>
                                            </div>
                                            <div>
                                                <h3 className="text-start mt-5">
                                                    {cartItem.price}.00 * {cartItem.cartQuantity}
                                                    <span className="ml-10"> = {cartItem.price * cartItem.cartQuantity}</span>
                                                </h3>
                                            </div>
                                            <div className="mt-5 mr-20 lg:mr-64 ">
                                                <button className='mr-5' onClick={() => handleAdd(cartItem)}>
                                                    <CiCirclePlus className="text-4xl text-blue-400"></CiCirclePlus>
                                                </button>
                                                <button className='desCart' onClick={() => handleDecrease(cartItem)}>
                                                    <CiCircleMinus className="text-4xl text-red-500"></CiCircleMinus>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))}

                        <div className="w-3/4 lg:w-1/4 mx-auto flex justify-between ">
                            <div className="mt-10">
                            <Button  variant="contained" size="small" color="error" className="btn-sm" onClick={() => handleClear()}>
                                Clear Cart
                            </Button>
                            </div>

                            <div className="ml-5 ">
                                <div className="mb-4">
                                    <span className="text-black mr-5 font-semibold">Subtotal</span>
                                    <span className="text-black mr-5">{cart.cartTotalAmount}</span>
                                </div>
                                <Link to="/checkout" className="mt-5">
                                    <Button variant="contained" size="small" color="success" className="bt-sm" onClick={() => handleClear()}>Check out</Button>
                                </Link>


                                <div className="mt-10 mb-10">
                                    <Link to="/medicine">
                                        <span className="text-gray-900 font-bold">Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> : <div className="w-ful mb-20">
                    <img src={cartImg} alt="" className="w-3/4 lg:w-1/4 mx-auto h-52" />
                    <p className="mt-10 text-red-500 font-bold">Your Cart is Currently Empty</p>
                </div>
            }


        </div>
    );
};

export default Cart;