import React from 'react';
import UpdateAppointments from './UpdateAppointments';
import { Link } from 'react-router-dom';

const AdminAppointment = ({ appointment }) => {
    const { doctorname, doctorimage, doctorfees, patientname, patientemail, phone, patientgender, date, schedule,bookingStatus } = appointment;
  
    return (
        <>
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={doctorimage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {doctorname}
            </td>
            <td>{doctorfees} TK</td>
            <td>{patientname}</td>
            <td>{patientgender}</td>
            <td>{patientemail}</td>
            <td>0{phone}</td>
            <td>{date}</td>
            <td>{schedule}</td>
            <td>{bookingStatus}</td>
            <td> <Link to={`/appointment/${appointment._id}`} >Edit</Link> </td>
            <td>
                <button className="text-red-700">delete</button>
            </td>
        </tr>
        <UpdateAppointments appointment={appointment}></UpdateAppointments>
       </>
    );
};

export default AdminAppointment;