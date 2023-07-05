import React from 'react';
import { useSelector } from 'react-redux';

const Order = ({ orderr }) => {
    const { orders } = useSelector(state => state.orders.orders);
    return (
        <div className="col-span-12  md:col-span-3  gap-4 lg:col-span-6">
            <div className="flex ">

                <div className="w-2/4">
                    <img src={orderr.image.url} alt="" className="w-full h-40 p-3" />
                </div>
                <div className="w-full mt-5">
                    <p className="text-gray-900 text-start font-semibold">{orderr.name}</p>
                    <p className="text-gray-900 text-start mt-2">Quantity {orderr.cartQuantity} (pcs/bottle/strip)</p>
                    <p className="text-gray-900 text-start mt-2">Total Price  {orderr.price} BDT</p>
                    <p className="text-gray-900 text-start mt-2">Status  <span className="text-green-500">{orders[0].orderStatus}</span></p>

                </div>
            </div>
        </div>
    );
};

export default Order;