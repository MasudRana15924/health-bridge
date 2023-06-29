import React from 'react';
import { Link } from 'react-router-dom';

const AdminDoctor = ({ doctor }) => {
    const {_id, name, expert, degree, fees, ratings, images, phone, email, work } = doctor;
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
        <td>
          {name}
          <br/>
          <span className="badge badge-ghost badge-sm">{degree}</span>
          <br/>
          <span className="badge badge-ghost badge-sm">{expert}</span>
        </td>
        <td>{email}</td>
        <td>0{phone}</td>
        <td>{work}</td>
        <td>{fees}</td>
        <td>{ratings}</td>
        <th>
          <Link to={`/update-doctor/${doctor._id}`}><button className="btn btn-ghost btn-xs">update</button></Link>
        </th>
      </tr>
    );
};

export default AdminDoctor;