import React from 'react';
import { useState } from 'react';
import Insurances from '../landingpage/Insurances';

const Insurance = () => {
    const [patientname, setPname] = useState('');
    const [patientemail, setEmail] = useState('');
    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <div className="mt-48 mb-24">
            <Insurances></Insurances>
        <form action="" className="w-3/4 lg:w-2/4 mx-auto " >
            <div className=" mb-16 mt-16">
                <div className="form-control lg:w-2/4 lg:mx-auto ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Name" className="input input-bordered w-full "/>

                </div>
                <div className="form-control lg:w-2/4 mx-auto ">
                    <label className="label">
                        <span className="label-text">What is your Email?</span>
                    </label>
                    <input type="text" value={patientemail} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full "/>

                </div>
                <div className="form-control lg:w-2/4 mx-auto ">
                    <label className="label">
                        <span className="label-text">What is your Phone?</span>
                    </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone "  className="input input-bordered w-full "/>

                </div>
                <div className="form-control lg:w-2/4 mx-auto ">
                    <label className="label">
                        <span className="label-text">What is your Gender?</span>
                    </label>
                    <select name="Gender" className=" h-12 border rounded" value={patientgender} onChange={(e) => setGender(e.target.value)}>
                        <option  >Select Gender </option>
                        <option  >Male </option>
                        <option >Female </option>
                    </select>

                </div>
               
                <button className="btn lg:w-2/4 mx-auto mt-10">Apply Insurance </button>
            </div>
            
        </form>
        </div>
    
    );
};

export default Insurance;