import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { createHireNurse } from '../../state/nurses/hireNurseSlice';
import { Link } from 'react-router-dom';

const NursesModal = ({nurse}) => {
    const dispatch = useDispatch();
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token

    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const nursename = nurse.name;
    const nursefees = nurse.fees;
    const nurseimage = nurse.images[0].url;
    const nurseId = nurse._id;
    const data = ({ nursename, nursefees, nurseimage, nurseId,  patientgender, phone, date});
    const handleCreate = (e) => {
        e.preventDefault();
        if (patientgender && phone && date) {
            dispatch(createHireNurse({
                data, userToken
            }));
            toast.success('Your appointment placed ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Please enter your details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div>
             {
                token ? <div>
                    <input type="checkbox" id="appointment-modal" class="modal-toggle" />
                    <div class="modal ">
                        <div class="modal-box  relative">
                            <label for="appointment-modal" class="btn btn-sm bg-white border-white text-red-500 absolute right-2 top-2 mt-4">✕</label>
                            <h3 class="text-start text-xl font-semibold mb-5">Make an Appointment</h3>
                            <form action="" className="" onSubmit={handleCreate}>
                                <div className="">
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-blue-400">Patient Gender </span>
                                        </label>
                                        <select name="Gender" className="w-full h-12 border rounded" value={patientgender} onChange={(e) => setGender(e.target.value)}>
                                            <option  >Select Gender </option>
                                            <option  >Male </option>
                                            <option >Female </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-blue-400">Date </span>
                                        </label>
                                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-full p-2  h-12 mx-auto" />
                                    </div>
                                   
                                </div>
                                <button className="btn bg-teal-400 border-teal-400 mt-5 h-12 w-full text-white font-semibold text-center mb-5">Hire Nurse </button>
                            </form>
                        </div>
                    </div>

                </div> : <div>


                    <input type="checkbox" id="appointment-modal" class="modal-toggle" />
                    <div class="modal ">
                        <div class="modal-box  relative">
                            <label for="appointment-modal" class="btn btn-sm bg-white border-white text-red-500 mt-3 absolute right-2 top-2">✕</label>
                            <Link to="/user-signin" className="text-blue-400">LogIn</Link>
                        </div>
                    </div>
                </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={5000}
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

export default NursesModal;