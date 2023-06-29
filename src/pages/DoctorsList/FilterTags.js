import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from '../../state/category/categorySlice';
import FilterTag from './FilterTag';
import Loading from '../loader/Loading';


const FilterTags = () => {
    const dispatch = useDispatch();
    const { categories,isLoading } = useSelector(state => state.categories.categories);
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])
    let content;
    // if (!isLoading && !categories) {
    //     content = <Loading></Loading>
    // }
    if (!isLoading && categories ) {
        content = categories?.map((category)=><FilterTag key={category._id} title={category.title}></FilterTag>)
    }
    

    return (
        <div>
            {/* {categories?.map((category)=><FilterTag key={category._id} title={category.title}></FilterTag>)} */}
            {
                content
            }
        </div>
    );
};

export default FilterTags;