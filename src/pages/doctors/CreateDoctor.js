import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import UserSidebar from '../user/UserSidebar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctors } from '../../state/admin/create/createDoctorsSlice';

const CreateDoctor = () => {
    const dispatch = useDispatch();
    const {loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [name, setName] = useState("");
    const [degree, setDegree] = useState("");
    const [expert, setExpert] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [work, setWork] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [fees, setFees] = useState("");
    const [description, setDescription] = useState("");

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setImages([]);
        setImagesPreview([]);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };
    const createDoctor=(e)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("description", description);
        myForm.set("expert", expert);
        myForm.set("work", work);
        myForm.set("gender", gender);
        myForm.set("degree", degree);
        myForm.set("fees", fees);
        myForm.set("location", location);
        myForm.set("phone", phone);
        images.forEach((image) => {
            myForm.append("images", image);
        });
        const data=myForm;
        console.log(data);
        dispatch(createDoctors({
            data,userToken
        }));
        toast.success('Create Doctor Successful');
    }  
  
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="max-w-full mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
                    <div className="w-3/4 lg:mx-auto text-end mt-20 mb-5">
                        <UserSidebar></UserSidebar>

                    </div>
                    <div className="w-3/4 mb-5 mt-12 p-5">
                        <p className="text-start text-3xl ">Create An Doctor</p>
                        <form action=""  onSubmit={createDoctor}>
                            <input type="text" placeholder="Name" className="input input-bordered input-md w-full mt-3" value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            <input type="text" placeholder="Degree" className="input input-bordered input-md w-full mt-3" value={degree}
                                onChange={(e) => setDegree(e.target.value)}/>
                            <input type="text" placeholder="Expert" className="input input-bordered input-md w-full mt-3" value={expert}
                                onChange={(e) => setExpert(e.target.value)}/>
                            <input type="text" placeholder="Work" className="input input-bordered input-md w-full mt-3" value={work}
                                onChange={(e) => setWork(e.target.value)}/>
                            <input type="text" placeholder="Gender" className="input input-bordered input-md w-full mt-3" value={gender}
                                onChange={(e) => setGender(e.target.value)}/>
                            <input type="text" placeholder="Location" className="input input-bordered input-md w-full mt-3" value={location}
                                onChange={(e) => setLocation(e.target.value)}/>
                            <input type="text" placeholder="Phone" className="input input-bordered input-md w-full mt-3" value={phone}
                                onChange={(e) => setPhone(e.target.value)}/>
                            <input type="text" placeholder="Email" className="input input-bordered input-md w-full mt-3" value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder="Fees" className="input input-bordered input-md w-full mt-3" value={fees}
                                onChange={(e) => setFees(e.target.value)}/>
                            <input type="text" placeholder="Description" className="input input-bordered input-md w-full mt-3" value={description}
                                onChange={(e) => setDescription(e.target.value)}/>

                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={createProductImagesChange}
                                multiple
                                className="mt-3"
                            />
                            <div id="createProductFormImage">
                                {imagesPreview.map((image, index) => (
                                    <img key={index} src={image} alt="Product Preview" />
                                ))}
                            </div>
                            <button className="btn bg-violet-900 mt-5 h-12 w-full text-white font-semibold text-center mb-5">Create Doctor </button>
                        </form>
                    </div>

                </div>
            </div>
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

export default CreateDoctor;