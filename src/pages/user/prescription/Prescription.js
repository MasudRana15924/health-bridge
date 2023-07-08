import React from 'react';
import UserSidebar from '../UserSidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPrescription } from '../../../state/user/prescription/prescriptionSlice';
import Loading from '../../loader/Loading';
import { Alert, AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import Prescriptions from './Prescriptions';

const Prescription = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { prescription, isLoading, isError, error } = useSelector(state => state.myPrescriptions.myPrescriptions);
    useEffect(() => {
        dispatch(fetchPrescription({userToken}));
    }, [dispatch, userToken]);
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && prescription?.length === 0) {
        content = <div className="col-span-12  ">
           <div class=" mt-5 h-12 lg:w-2/4 ">
                <Alert severity="error">
                    <AlertTitle className="text-start">Error</AlertTitle>
                   No Consultations found — <Link to="/doctors"><strong>take consultations!</strong></Link>
                </Alert>
            </div>
        </div>
    }

    if (!isLoading && !isError && prescription?.length > 0) {

        content = prescription.map(booking => <Prescriptions key={booking._id} booking={booking} />)
    }
    return (
        <div className="lg:p-10 bg-white mt-16 lg:mt-44 mb-20">

        <div className="w-full lg:w-full 2xl:w-3/4 lg:mx-auto flex justify-center">
            <div className="hidden lg:block w-1/4 2xl:w-1/4  mb-5">
                <UserSidebar></UserSidebar>
            </div>
            <div className="w-full m-5 lg:full lg:ml-12">
                <h2 className="text-start lg:text-2xl ">Previous Prescription History</h2>
                <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-5">
                    {content}
                    
                </div>
            </div>
        </div>
</div>
    );
};

export default Prescription;