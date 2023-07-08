import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../state/category/categorySlice';
import Filters from './Filters';
import Loading from '../../pages/loader/Loading';

const Filter = () => {
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(state => state.categories.categories);
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])
    let content;
    if (isLoading && !categories.length) content = <Loading></Loading>

    if (!isLoading && categories) {
        content = categories?.map((category) => <Filters key={category._id} title={category.title} image={category.image}></Filters>)
    }

    return (
        <div className="p-5 lg:p-0 2xl:p-0 lg:w-3/4 2xl:w-2/4 mx-auto mb-20 lg:mt-40 mt-10">
            <p className="text-start ml-5  text-xl lg:text-3xl 2xl:text-3xl text-gray-900 font-bold mb-5 ">Please select a speaciality</p>
            <div className="grid grid-cols-12 gap-4 lg:gap-12 m-3 md:m-0 lg:m-0  lg:w-full 2xl:w-full mx-auto lg:mt-16">
                {content}
            </div>
        </div>
    );
};

export default Filter;