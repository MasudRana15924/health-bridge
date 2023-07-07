import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../state/category/categorySlice';
import Filters from './Filters';

const Filter = () => {
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(state => state.categories.categories);
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])
    let content;
    // if (!isLoading && !categories) {
    //     content = <Loading></Loading>
    // }
    if (!isLoading && categories) {
        content = categories?.map((category) => <Filters key={category._id} title={category.title}></Filters>)
    }

    return (
        <div className="container  mt-20 lg:w-3/4 mx-auto lg:mt-40 mb-20">
            <p className="text-start ml-5 lg:ml-44 text-xl lg:text-3xl text-gray-900 font-bold mb-5 ">Please select a speaciality</p>
            <div className="grid grid-cols-12 gap-4 lg:gap-12 m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto lg:mt-32">
                {content}
            </div>
        </div>
    );
};

export default Filter;