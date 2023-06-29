import React from 'react';
import UserSidebar from '../user/UserSidebar';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="flex">
                <div className="w-1/4">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="w-3/4 mt-48">
                    
                    <div className="radial-progress text-violet-700 mr-5" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>90%</div>
                    <div className="radial-progress text-violet-700 mr-5" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>
                    <div className="radial-progress text-violet-700 mr-5" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;