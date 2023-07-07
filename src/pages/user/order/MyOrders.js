import React from 'react';
import Order from './Order';

const MyOrders = ({ order }) => {
    let content;
    content = order.orderItems.map(order => <Order key={order._id} orderr={order}/>);
    return (
        <div className="col-span-12  md:col-span-3  gap-4 lg:col-span-4">
         {content}
            
        </div>
    );
};

export default MyOrders;