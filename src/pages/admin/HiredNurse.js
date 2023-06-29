import React from 'react';

const HiredNurse = ({nurse}) => {
    const { nursename, nurseimage, nursefees, patientname, patientemail, phone, patientgender, date,bookingStatus } =nurse
  
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={nurseimage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {nursename}
            </td>
            <td>{nursefees} TK</td>
            <td>{patientname}</td>
            <td>{patientgender}</td>
            <td>{patientemail}</td>
            <td>0{phone}</td>
            <td>{date}</td>
            <td>{bookingStatus}</td>
            <td>edit</td>
            <td>
                <button className="text-red-700">delete</button>
            </td>
        </tr>
    );
};

export default HiredNurse;