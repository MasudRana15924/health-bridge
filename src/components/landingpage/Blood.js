import React from 'react';
import bloodImg from '../../images/bloods.jpg'
import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { createBloodRequest } from '../../state/blood/bloodSlice';
import { useDispatch } from 'react-redux';
const Blood = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const Groups = [
        {

            label: 'Select Group ',
        },
        {
            value: 'A+',
            label: 'A+',
        },
        {
            value: 'A-',
            label: 'A-',
        },
        {
            value: 'B+',
            label: 'B+',
        },
        {
            value: 'B-',
            label: 'B-',
        },
        {
            value: 'O+',
            label: 'O+',
        },
        {
            value: 'O-',
            label: 'O-',
        },
        {
            value: 'AB+',
            label: 'AB+',
        },
        {
            value: 'AB-',
            label: 'AB-',
        },
    ];
    const data = ({ phone, name, email, group });
    const registerSubmit = (e) => {
        e.preventDefault();
        if (phone && name && email && group) {
             dispatch(createBloodRequest(data));
            toast.success('Send successfully', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('Enter all Fields', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    return (
        <div className="mt-28 lg:flex  lg:mt-64 md:mt-64 mb-10 w-3/4 mx-auto">
            <div className="">
                <img src={bloodImg} alt="" className="hidden lg:block h-96 full" />
                <div className="lg:mt-16">
                    <p className="text-md lg:text-4xl text-start text-blue-600 font-bold w-3/4 ">Benefits Of Blood Donate</p>
                    <p className="w-full text-gray-900 lg:text-xl text-start  lg:w-3/4 mt-5 lg:mt-10">Donating regularly may help your blood flow and result in fewer arterial blockages. In fact, some studies have shown that men who donate at least three times a year can drastically reduce their risk of having a heart attack or stroke. Donating can keep your iron level balanced.</p>
                    <p className="hidden lg:block text-gray-900 text-xl text-start  lg:w-3/4 mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et inventore reiciendis aliquid, perspiciatis cum fuga, optio laudantium culpa, nobis incidunt exercitationem saepe voluptatibus ab quidem delectus placeat facere modi enim?</p>
                    <p className="hidden lg:block text-gray-900 text-xl text-start  lg:w-3/4  mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, totam. Ex cupiditate incidunt eveniet earum excepturi laudantium voluptatibus pariatur porro? Incidunt reprehenderit culpa dicta suscipit repellat cupiditate natus et odio.</p>
                </div>
            </div>
            <div className="mt-8 lg:mt-32 lg:w-full">
                <h3 class="text-start lg:text-center lg:text-2xl text-blue-600 font-bold">Apply For Emergency  Blood </h3>
                <form action="" className="w-full" onSubmit={registerSubmit}>

                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Name" variant="standard" className="w-full lg:w-3/4 mx-auto mt-12" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Phone Number" variant="standard" className="w-full lg:w-3/4 mx-auto mt-12" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Email" variant="standard" className="w-full lg:w-3/4 mx-auto mt-12" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-8  lg:ml-0 lg:mr-0 mb-10">
                        <TextField
                            id="standard-select-currency-native"
                            select
                            label="Gender"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                            className="bg-white w-full lg:w-3/4 mx-auto "
                            onChange={(e) => setGroup(e.target.value)}
                        >
                            {Groups.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <Button variant="contained" className="w-3/4 lg:w-3/4" onClick={registerSubmit}>Send</Button>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Blood;