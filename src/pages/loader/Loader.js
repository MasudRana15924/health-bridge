import React from 'react';
import {Rings } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className="container w-2/4 mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto mt-44 lg:mt-96 justify-items-center">
            <div className="ml-10 w-2/4 mx-auto lg:ml-28 lg:w-1/4 ">
                <Rings
                    height="90"
                    width="90"
                    color="#F510EB "
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
               
                {/* <img src={logo} alt="" /> */}

            </div>
            <p className="ml-10 lg:ml-24 text-sm font-semibold leading-6 text-gray-900">DIU HelathBridge</p>
        </div>
    );
};

export default Loader;