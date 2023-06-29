import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../loader/Loading';
import { fetchNurse } from '../../state/nurses/nursSlice';
import NursesDetails from '../../components/nurses/NursesDetails';

const SingleNurse = () => {
    const dispatch = useDispatch();
    const { nurseId } = useParams()
    const { nurse, isLoading, isError, error } = useSelector(state => state.nurse.nurse);
    const { _id, location } = nurse || {}
    useEffect(() => {
        dispatch(fetchNurse(nurseId))
    }, [dispatch, nurseId])
    let content;
    if (isLoading) content = <Loading></Loading>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !nurse?._id) {
        content = <div className="col-span-12">No Nurse found ! </div>
    }
    if (!isLoading && !isError && nurse?._id) {
        content = <div>
            <NursesDetails nurse={nurse}></NursesDetails>

        </div>
    }
    return (
        <section className="w-3/4 mx-auto pt-6 pb-20 mt-24">
        {content}
        <div className="mt-48">
            {/* <h2 className="text-start text-3xl text-red-500">Related Doctors </h2> */}
            {/* <RelatedDoctors expert={expert} id={_id}> </RelatedDoctors> */}
        </div>
    </section>
    );
};

export default SingleNurse;