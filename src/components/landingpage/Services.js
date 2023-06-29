import React from 'react';
import find from '../../images/pin.png'
import working from '../../images/work.png'
import book from '../../images/booking.png'

const Services = () => {
    return (
        <div className="mt-5 md:mt-20 lg:mt-20 w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div >
                <div className="card  h-96 bg-base-100 shadow-xl">
                    <img src={find} alt="find" className="h-32 w-1/4 mx-auto mt-5" />
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl font-semibold text-fuchsia-700 leading-8">
                            Find A Doctor
                        </h2>
                        <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur fuga maxime reiciendis! Nesciunt dolorem est quasi reiciendis quidem</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="card h-96 bg-base-100 shadow-xl">
                    <img src={working} alt="find" className="h-32 w-1/4 mx-auto mt-5" />
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-semibold text-fuchsia-700">
                            View Profile
                        </h2>
                        <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur fuga maxime reiciendis! Nesciunt dolorem est quasi reiciendis quidem</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card h-96 bg-base-100 shadow-xl">
                    <img src={book} alt="find" className="h-32 w-1/4 mx-auto mt-5" />
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-semibold text-fuchsia-700">
                            Make An Appointment
                        </h2>
                        <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur fuga maxime reiciendis! Nesciunt dolorem est quasi reiciendis quidem</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;