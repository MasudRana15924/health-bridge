import React from 'react';
import { Triangle} from 'react-loader-spinner';
import logo from '../../images/diu.png'
const Loader = () => {
    return (
        <div className="container w-2/4 mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto mt-96 lg:mt-96 justify-items-center">
        <div className="ml-10 w-2/4 mx-auto lg:ml-28 lg:w-1/4 ">
                <Triangle
                    height="70"
                    width="70"
                    color="#F510EB "
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
               {/* <img src={logo} alt="" /> */}
               
        </div>
        {/* <p className="ml-3 lg:ml-30 text-sm font-semibold leading-6 text-gray-900 mt-3">MKM HelathBridge</p> */}
    </div>
    );
};

export default Loader;