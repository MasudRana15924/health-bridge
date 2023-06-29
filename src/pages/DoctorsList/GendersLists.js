import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenders } from '../../state/category/genderSlice';
import GenderList from './GenderList';

const GendersLists = () => {
    const dispatch = useDispatch();
    const { genders } = useSelector(state => state.genders.genders);
    useEffect(() => {
        dispatch(fetchGenders());
    }, [dispatch])
    return (
        <div>
                {genders?.map((gender)=><GenderList key={gender._id} title={gender.title}></GenderList>)}
        </div>
    );
};

export default GendersLists;