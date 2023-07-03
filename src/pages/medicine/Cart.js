import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../state/medicine/cartSlice';
import { Link } from 'react-router-dom';
import cartImg from '../../images/carts.png'

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
        <div className=" w-full lg:w-2/4 mx-auto  mt-24 lg:mt-48">

            {cart.cartItems?.length > 0 ?
                <div>
                    <div className="flex">
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (

                                <div className="overflow-x-auto w-full">
                                    <table className="hidden  table w-full lg:block">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th className= "lg:block">Name</th>

                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="w-1/4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12 mt-5">
                                                                <img src={cartItem.image.url} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className="w-2/4">{cartItem.name}</td>
                                                <td className="w-1/4"> {cartItem.cartQuantity} </td>

                                                <td className="w-1/4 pr-24">
                                                    <div className="w-1/4">
                                                        <button
                                                            className="btn btn-sm bg-gray border-gray hover:bg-gray hover:border-gray text-white font-bold"
                                                            onClick={() => handleDecrease(cartItem)}
                                                        >
                                                            -
                                                        </button>
                                                        <div className="text-black mt-3 ml-3 mb-3">
                                                            {cartItem.cartQuantity}
                                                        </div>
                                                        <button
                                                            className="btn btn-sm bg-gray border-gray hover:bg-gray hover:border-gray text-white font-bold"
                                                            onClick={() => handleAdd(cartItem)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="w-1/4">
                                                    {cartItem.price * cartItem.cartQuantity}
                                                </td>

                                            </tr>
                                        </tbody>

                                    </table>
                                    {/* for small devices */}
                                    <div className="flex justify-between lg:hidden pr-5 pl-5">
                                            <p>Product</p>
                                            <p></p>
                                            <p></p>
                                            <p>Price</p>
                                            <p className="">Quantity</p>
                                            <p>Total</p>
                                        </div>
                                    <div className="flex justify-between lg:hidden pr-10 mt-5 mb-5">
                                        
                                        <div>
                                            <div className="">
                                                <div className=" w-12 h-12 mt-5">
                                                    <img src={cartItem.image.url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <p className="">{cartItem.name}</p>

                                        </div>
                                        <div>
                                            <p className="">{cartItem.price}</p>
                                        </div>
                                        <div className="">
                                            <button
                                                className="btn btn-sm bg-gray border-gray hover:bg-gray hover:border-gray text-white font-bold"
                                                onClick={() => handleDecrease(cartItem)}
                                            >
                                                -
                                            </button>
                                            <div className="text-black mt-3 ml-3 mb-3">
                                                {cartItem.cartQuantity}
                                            </div>
                                            <button
                                                className="btn btn-sm bg-gray border-gray hover:bg-gray hover:border-gray text-white font-bold"
                                                onClick={() => handleAdd(cartItem)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div>
                                            <p className=""> {cartItem.price * cartItem.cartQuantity}</p>
                                        </div>
                                    </div>
                                </div>



                            ))}
                    </div>
                    <div className="cart-summary p-5 lg:p-0">
                        <button className="btn bt-sm border-red-500 bg-red-500  hover:border-red-500 hover:bg-red-500 mt-10 " onClick={() => handleClear()}>
                            Clear Cart
                        </button>

                        <div className="ml-5">
                            <div>
                                <span className="text-black mr-5 font-semibold">Subtotal</span>
                                <span className="text-black mr-5">{cart.cartTotalAmount}</span>
                            </div>
                            <Link to="/checkout">
                                <button className="btn bt-sm border-green-500 bg-green-500  hover:border-green-500 hover:bg-green-500 text-white mt-5" onClick={() => handleClear()}>Check out</button>
                            </Link>


                            <div className=" mt-10 mb-10">
                                <Link to="/medicine">
                                    <span className="text-gray-900 font-bold ">Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="w-ful">
                    <img src={cartImg} alt="" className="w-3/4 lg:w-1/4 mx-auto h-40" />
                    <p className="mt-10 text-red-500 font-bold">Your Cart is Currently Empty</p>
                </div>

            }


        </div>
    );
};

export default Cart;