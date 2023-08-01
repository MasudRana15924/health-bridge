import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai"
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMeet } from '../../state/appointments/doctorMeetSlice';
const Payment = () => {
    const dispatch=useDispatch();
    const { meeturl } = useSelector(state => state.meet.meetUrl);
    const handleMeetUrl=()=>{
            //   navigate(meeturl);
            dispatch(clearMeet());
              window.open(meeturl)
    }
    const duration = 5 * 60 * 1000;
    const [time, setTime] = useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])
    const getFormatedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let seconds = parseInt(Math.floor(total_seconds % 60));
        let minutes = parseInt(Math.floor(total_minutes % 60));

        return <div className="flex p-5 lg:w-1/4 mx-auto lg:mt-10 ">

            <div>
                <p className="text-4xl text-violet-500">{minutes}</p>
                <p className="font-semibold leading-6 text-gray-900">Minutes</p>
            </div>
            <div className="ml-10">
                <p className="text-4xl text-violet-500">{seconds}</p>
                <p className="font-semibold leading-6 text-gray-900">Seconds</p>
            </div>
        </div>
    }
    return (
        <div className="w-full mt-24 lg:mt-64 lg:w-3/4 mx-auto mb-32">

            <AiOutlineCheckCircle className="text-9xl w-2/4 mx-auto text-emerald-400"></AiOutlineCheckCircle>
            {/* <p className=" lg:mt-10 text-4xl  lg:w-2/4 mx-auto text-orange-400 mb-3">Payment Success</p> */}
            <p className=" lg:mt-10 lg:text-xl font-semibold lg:w-2/4 mx-auto text-gray-900 mb-3">Please wait 5 minutes Doctor will call you</p>
            <p className="text-red-800 ml-24 lg:ml-0">{getFormatedTime(time)}</p>
            {/* <p className=" lg:mt-5 text-2xl  lg:w-2/4 mx-auto text-red-400 mb-3">Don't Refresh</p> */}
            {/* <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className=" mt-3 lg:mt-5 text-md  lg:w-2/4 mx-auto text-blue-500">
                Check your email for video call link
            </a> */}
            <br />
            {/* <Link to={meeturl}>
                <button className=" mt-5 btn w-40  bg-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:border-emerald-400">Done</button></Link> */}
                 <button className=" mt-5 btn w-40  bg-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:border-emerald-400" onClick={handleMeetUrl}>Done</button>
        </div>
    );
};

export default Payment;
