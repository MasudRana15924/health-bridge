import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AllOrdersList = ({ order }) => {
    const { orders } = useSelector(state => state.allOrders.allOrders);
    const [bookingStatus, setStatus] = useState('');
    const handleCreate = (e) => {
        e.preventDefault();
    }
    console.log(orders);
    return (
        <>
            {
                order.orderItems?.map((o) => (
                     <tr className="border">
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={o.image.url} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-start text-red-500 ml-10">{o.name}</td>
                        <td>{o.cartQuantity} </td>
                        <td>
                            {
                                orders.map((status)=>(
                                     <a href="#my_modal_8" className="btn">{status.orderStatus}</a>
                                ))
                            }
                        </td>
                        <td>
                            <button  >delete</button>
                        </td>
                    </tr>
                ))
            }

            <div className="modal" id="my_modal_8">
                <div className="modal-box">
                    <h3 class="text-center  font-bold mb-5">Update Appointment Status</h3>
                    <form action="" className="" onSubmit={handleCreate}>
                        <div className="">
                            <select className="w-full h-12 border rounded" value={bookingStatus} onChange={(e) => setStatus(e.target.value)}  >
                                <option  >Update Status</option>
                                <option >Confirmed </option>
                                <option >Delivered</option>
                            </select>
                        </div>
                        <button className="btn btn-sm mt-5 bg-blue-500 border-blue-500 hover:bg-blue-500 hover:border-blue-500 h-6 text-sm w-full">Update</button>
                    </form>
                    <div className="modal-action">
                        <a href="#" className="btn btn-sm bg-white text-red-600  border-white hover:bg-white hover:border-white">Close </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllOrdersList;