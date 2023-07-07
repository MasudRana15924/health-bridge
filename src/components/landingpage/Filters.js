import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expertRemoved, expertSelected } from '../../state/filter/filterReducer';
import { Link } from 'react-router-dom';


const Filters = ({ title }) => {
    const dispatch = useDispatch();
    const { experts } = useSelector(state => state.filter)

    const isSelected = experts.includes(title) ? true : false


    const handleSelect = () => {
        if (isSelected) {
            dispatch(expertRemoved(title));
        } else {
            dispatch(expertSelected(title));
        }
    }
    return (
        <div className=" col-span-12 md:col-span-4 lg:col-span-3 ">
    
            <Link to="/doctors">
            <p className= "text-blue-500 text-xl lg:text-2xl font-bold text-center pt-5 lg:pt-10 bg-base-100 h-20 lg:h-28 card shadow-xl" onClick={handleSelect}>
                {title}
                </p>
            </Link>
          
        </div>
    );
};

export default Filters;