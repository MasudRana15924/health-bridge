import React from 'react';
import consultingImg from '../../images/insurance (2).jpg'
import bookImg from '../../images/insurance (3).jpg'
import insuranceImg from '../../images/insurance (1).jpg'

const Blog = () => {
    return (
        <div className="blogs md:mt-48 lg:mt-48 mb-10">
            <p className="text-2xl lg:text-4xl lg:font-bold  absolute ml-5 lg:ml-60 lg:mt-10 lg:mb-10 ">Blog and News</p>
            <div className="p-3 lg:p-0 lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="mt-12 lg:mt-28 md:mb-20 lg:mb-20">
                    <div className="h-96 bg-white ">
                        <img src={consultingImg} alt="find" className="h-40 lg:h-48 w-3/4 mx-auto pt-5" />
                        <div className="card-body text-center">
                            <h2 className="text-center lg:text-2xl font-semibold ">
                             Benefits of Consulting Online Doctor 
                            </h2>
                            <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur fuga maxime reiciendis! Nesciunt dolorem est quasi reiciendis quidem  <button className="btn btn-sm bg-violet-600 border-violet-600 lg:w-1/4 text-xs ">Read More</button></p>
                      
                        </div>
                    </div>
                </div>
                <div className="lg:mt-28 md:mt-28 md:mb-20 lg:mb-20">
                    <div className="h-96 bg-white">
                    <img src={bookImg} alt="find" className="h-40  w-3/4 mx-auto pt-5" />
                        <div className="card-body">
                            <h2 className="text-start lg:text-2xl font-semibold ">
                            Benefits of Online Doctor 
                            </h2>
                            <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur fuga maxime reiciendis! Nesciunt dolorem est quasi reiciendis quidem  <button className="btn btn-sm bg-violet-600 border-violet-600 lg:w-1/4 text-xs ">Read More</button></p>
                        
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:mt-28 md:mt-28 mb-10">
                    <div className=" h-96 bg-white">
                    <img src={insuranceImg} alt="find" className="h-40 w-3/4 mx-auto pt-5" />
                        <div className="card-body">
                            <h2 className="text-start lg:text-2xl font-semibold">
                            Benefits of Insurance
                            </h2>
                            <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur fuga maxime reiciendis! Nesciunt dolorem est quasi reiciendis quidem  <button className="btn btn-sm bg-violet-600 border-violet-600 lg:w-1/4 text-xs ">Read More</button></p>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;