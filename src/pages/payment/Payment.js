import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
const Payment = () => {
    const { tranId} = useParams();
    
    return (
        <div className="mt-24 lg:mt-64 w-3/4 mx-auto mb-32">

                <AiOutlineCheckCircle className="text-9xl w-1/4 mx-auto text-orange-400"></AiOutlineCheckCircle>
                <p className=" lg:mt-10 text-4xl  lg:w-2/4 mx-auto text-orange-400">Payment Success</p>
                <p className=" mt-3 lg:mt-5 text-md  lg:w-2/4 mx-auto text-orange-400">Check email for video call link</p>
               <Link to="/my-booking">
               
               <button className=" mt-5 btn w-40  bg-orange-400 border-orange-400 hover:bg-orange-400 hover:border-orange-400">Done</button></Link>
        </div>
    );
};

export default Payment;
