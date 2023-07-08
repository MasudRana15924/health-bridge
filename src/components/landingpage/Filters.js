import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expertRemoved, expertSelected } from '../../state/filter/filterReducer';
import { Link } from 'react-router-dom';


const Filters = ({ title, image }) => {
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
        <div className=" col-span-12 md:col-span-4 lg:col-span-4 card shadow-xl ">
            <div className="flex ">
                <img src={image?.url} alt="" className="h-32 w-32" />
                <Link to="/doctors">
                    <p className="text-blue-500 text-xl lg:text-2xl font-bold text-start bg-base-100 mt-10 ml-5" onClick={handleSelect}>
                        {title}
                    </p>
                </Link>
            </div>

        </div>
    );
};

export default Filters;