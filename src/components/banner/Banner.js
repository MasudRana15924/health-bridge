import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/imhh (1).jpg'
const Banner = () => {

    return (
       <div className="lg:flex mt-8 lg:mt-24 ">
        <div className="w-full lg:w-3/4">
            <img src={bannerImg} alt="" className="w-full "/>
        </div>
         <div className="w-full bg-white navbar-section">
            <div className="relative isolate px-6 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                </div>
                <div className="mx-auto max-w-2xl   lg:py-40">
                    <div className="mb-5 sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative px-3 py-1 text-sm leading-6 text-gray-600  ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next plan.{' '}
                            <Link to="/about" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            DIU Health Bridge
                        </h1>
                        <p className="mt-3 text-lg leading-8 text-gray-600 text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde laboriosam, magnam recusandae nobis totam eveniet eos ab quo quisquam placeat iusto illo voluptate debitis tempora consectetur odit nemo quidem.
                        </p>
                        <div className="mt-5 flex items-center justify-center gap-x-6">
                            <Link
                                to="/doctors"
                                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get Appointment
                            </Link>
                            <Link to="" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
       </div>
    );
};

export default Banner;