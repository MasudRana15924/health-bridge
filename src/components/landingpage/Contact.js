import React from 'react';

const Contact = () => {
    return (
        <div className=' lg:mt-40 mb-20 mt-40'>
            {/* <div className="lg:flex lg:w-2/4 mx-auto">
                <div className="card-body shadow m-5">
                    <div className="stat">
                        <div className="stat-title">Phone</div>
                        <p className="stat-value text-md ">+01914212076</p>

                    </div>
                </div>
                <div className="hidden card-body shadow lg:ml-10 mt-5 m-5">
                    <div className="stat ">
                        <div className="">Email</div>
                        <p className="stat-value text-md ">mkmcarehos@gmail.com</p>

                    </div>
                </div>

            </div> */}
            <div className="lg:w-2/4 mx-auto mt-20">
                <div className="w-3/4 mx-auto card flex-shrink-0   shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black">Send Mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;