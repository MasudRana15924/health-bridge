import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import UserSidebar from '../user/UserSidebar';
import { fetchNurse } from '../../state/nurses/nursSlice';
import { fetchUpdateNurse } from '../../state/admin/update/updateNurseSlice';

const UpdateNurses = () => {
    const dispatch = useDispatch();
    const { nurseId } = useParams()
    const { nurse } = useSelector(state => state.nurse.nurse);
    const {_id}=nurse || {};
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    useEffect(() => {
        dispatch(fetchNurse(nurseId));
            if(nurse&& nurseId){
                setName(nurse.name);
                setDegree(nurse.degree);
                setEmail(nurse.email);
                setGender(nurse.gender);
                setWork(nurse.work);
                setLocation(nurse.location);
                setGender(nurse.gender);
                setFees(nurse.fees);
                setPhone(nurse.phone);
                setOldImages(nurse.images);
                setDescription(nurse.description);
            }
            
            
    }, [dispatch,nurseId])
    const [oldImages, setOldImages] = useState([]);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [name, setName] = useState("");
    const [degree, setDegree] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [work, setWork] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [fees, setFees] = useState("");
    const [description, setDescription] = useState("");

    const updateNurseImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setImages([]);
        setImagesPreview([]);
        setOldImages([]);
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

    const updateNurse=(e)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("description", description);
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
        dispatch(fetchUpdateNurse({
            data,userToken,_id
        }));
        toast.success('Update nurse Successful');
    } 
    return (
        <div>

        {
            nurse?._id && <div className="p-10 bg-white mt-20 mb-20">
                <div className="max-w-full mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
                        <div className="w-3/4 lg:mx-auto text-end mt-20 mb-5">
                            <UserSidebar></UserSidebar>

                        </div>
                        <div className="w-3/4 mb-5 mt-12 p-5">
                            <p className="text-start text-3xl ">Update </p>
                            <form action="" onSubmit={updateNurse}>
                                <input type="text" placeholder={nurse.name} className="input input-bordered input-md w-full mt-3" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <input type="text" placeholder="Degree" className="input input-bordered input-md w-full mt-3" value={degree}
                                    onChange={(e) => setDegree(e.target.value)} />
                               
                                <input type="text" placeholder="Work" className="input input-bordered input-md w-full mt-3" value={work}
                                    onChange={(e) => setWork(e.target.value)} />
                                <input type="text" placeholder="Gender" className="input input-bordered input-md w-full mt-3" value={gender}
                                    onChange={(e) => setGender(e.target.value)} />
                                <input type="text" placeholder="Location" className="input input-bordered input-md w-full mt-3" value={location}
                                    onChange={(e) => setLocation(e.target.value)} />
                                <input type="text" placeholder="Phone" className="input input-bordered input-md w-full mt-3" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                                <input type="text" placeholder="Email" className="input input-bordered input-md w-full mt-3" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" placeholder="Fees" className="input input-bordered input-md w-full mt-3" value={fees}
                                    onChange={(e) => setFees(e.target.value)} />
                                <input type="text" placeholder="Description" className="input input-bordered input-md w-full mt-3" value={description}
                                    onChange={(e) => setDescription(e.target.value)} />

                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={updateNurseImagesChange}
                                    multiple
                                    className="mt-3"
                                />
                                <div id="createProductFormImage">
                                    {oldImages &&
                                        oldImages.map((image, index) => (
                                            <img key={index} src={image.url} alt="Old Product Preview" />
                                        ))}
                                </div>
                                <div id="createProductFormImage">
                                    {imagesPreview.map((image, index) => (
                                        <img key={index} src={image} alt="Product Preview" />
                                    ))}
                                </div>
                                <button className="btn bg-violet-900 mt-5 h-12 w-full text-white font-semibold text-center mb-5">Update </button>
                            </form>
                        </div>

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

export default UpdateNurses;