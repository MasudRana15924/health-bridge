import React from 'react';
import { useState } from 'react';
import coming from '../../images/coming.jpg'
import { useEffect } from 'react';

const Ambulance = () => {
    const duration = 30 * 24 * 60 * 60 * 1000;
    const [time, setTime] = useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])
    const getFormatedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));
        let seconds = parseInt(Math.floor(total_seconds % 60));
        let minutes = parseInt(Math.floor(total_minutes % 60));
        let hours = parseInt(Math.floor(total_hours % 24));
        return <div className="flex justify-between p-5  lg:w-2/4 2xl:w-1/4 mx-auto lg:mt-10 mb-10">
            <div>
                <p className="text-4xl text-rose-500">{days}</p>
                <p className="font-semibold leading-6 text-gray-900">Days</p>
            </div>
            <div>
                <p className="text-4xl text-rose-500">{hours}</p>
                <p className="font-semibold leading-6 text-gray-900">Hours</p>
            </div>
            <div>
                <p className="text-4xl text-rose-500">{minutes}</p>
                <p className="font-semibold leading-6 text-gray-900">Minutes</p>
            </div>
            <div>
                <p className="text-4xl text-rose-500">{seconds}</p>
                <p className="font-semibold leading-6 text-gray-900">Seconds</p>
            </div>
        </div>
    }
    return (
        <div className="w-3/4 lg:w-full ml-5 lg:mx-auto mt-20 lg:mt-60">
            <div className="lg:w-2/4 mx-auto ">
               
                <p className="text-gray-900 text-2xl lg:text-5xl text-start">COMING SOON</p>
                <p className="text-start text-md mt-6">It is intended to reduce long queues in hospitals and long waiting periods for an ambulance via location-based services. By using this application, lives in the rural areas can be made easier and loss of lives prevented by providing timely response from the appropriate healthcare providers during emergencies.</p>

                <p className="text-red-800">{getFormatedTime(time)}</p>
            </div>

        </div>
    );
};

export default Ambulance;