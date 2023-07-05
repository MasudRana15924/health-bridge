import React from 'react';
import Order from './Order';

const MyOrders = ({ order }) => {
    let content;
    content = order.orderItems.map(order => <Order key={order._id} orderr={order}/>);
    return (
        <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-5">
         {content}
            
        </div>
    );
};

export default MyOrders;