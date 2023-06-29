import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusRemoved, statusSelected } from '../../state/filter/filterReducer';

const FilterStatuses = ({title}) => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.filter)

    const isSelected =status.includes(title) ? true : false

    const style = isSelected ? 'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1 lg:ml-64' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 lg:ml-64'
    const handleSelect = () => {
        if (isSelected) {
             dispatch(statusRemoved(title));
        } else {
             dispatch(statusSelected(title));
        }
    }
    return (
        <div>
        {/* <p className="w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-3 lg:ml-64">{title}</p> */}
        <p className={style} onClick={handleSelect}>
        <input type="checkbox" className="mr-3"/>
            Online Now
            
            </p>
    </div>
    );
};

export default FilterStatuses;