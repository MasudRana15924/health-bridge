import React from 'react';
import { useState } from 'react';
import img from '../../images/comming.jpg'
import rocket from '../../images/rocket.jpg'
import { useEffect } from 'react';

const Ambulance = () => {
    const duration = 30 * 24 * 60 * 60 * 1000;
    const [time, setTime] = useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])
    const getFormatedTime=(milliseconds)=>{
        let total_seconds=parseInt(Math.floor(milliseconds/1000));
        let total_minutes=parseInt(Math.floor(total_seconds/60));
        let total_hours=parseInt(Math.floor(total_minutes/60));
        let days=parseInt(Math.floor(total_hours/24));
        let seconds=parseInt(Math.floor(total_seconds % 60));
        let minutes=parseInt(Math.floor(total_minutes % 60));
        let hours=parseInt(Math.floor(total_hours % 24));
        return <div className="flex justify-between p-5  lg:w-2/4 2xl:w-1/4 mx-auto lg:mt-10 mb-10">
               <div>
                     <p className="text-4xl text-violet-500">{days}</p>
                     <p className="font-semibold leading-6 text-gray-900">Days</p>
               </div>
               <div>
                     <p className="text-4xl text-violet-500">{hours}</p>
                     <p className="font-semibold leading-6 text-gray-900">Hours</p>
               </div>
               <div>
                     <p className="text-4xl text-violet-500">{minutes}</p>
                     <p className="font-semibold leading-6 text-gray-900">Minutes</p>
               </div>
               <div>
                     <p className="text-4xl text-violet-500">{seconds}</p>
                     <p className="font-semibold leading-6 text-gray-900">Seconds</p>
               </div>
        </div>
    }
    return (
        <div className="w-3/4 mx-auto mt-20 lg:mt-60">
             <div className="w-full">
             <img src={img} alt="" className=" mx-auto lg:w-2/4 h-96" />
           
           <p className="text-red-800">{getFormatedTime(time)}</p>
             </div>
             <div className="w-1/4 mx-auto mt-24">
             <img src={rocket} alt="" className="rocket lg:ml-24"/>
             </div>
        </div>
    );
};

export default Ambulance;