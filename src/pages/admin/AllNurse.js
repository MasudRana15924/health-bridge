import React from 'react';
import { Link } from 'react-router-dom';

const AllNurse = ({nurse}) => {
    const{images,name,email}=nurse;
    return (
        <tr>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={images[0].url} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </div>
        </td>
        <td>{name}</td>
        <td>{email} </td>
        <td> <Link to={`/update-nurse/${nurse._id}`}>Update</Link> </td>
        <td>
            <button className="text-red-700">delete</button>
        </td>
      

    </tr>
    );
};

export default AllNurse;