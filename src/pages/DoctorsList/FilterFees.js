import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feesRemoved, feesSelected } from '../../state/filter/filterReducer';

const FilterFees = ({title}) => {
    const dispatch = useDispatch();
    const { fees } = useSelector(state => state.filter)

    const isSelected =fees.includes(title) ? true : false

    const style = isSelected ? 'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1 lg:ml-64' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 lg:ml-64'
    const handleSelect = () => {
        if (isSelected) {
             dispatch(feesRemoved(title));
        } else {
             dispatch(feesSelected(title));
        }
    }
    return (
        <div>
        {/* <p className="w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-3 lg:ml-64">{title}</p> */}
        <p className={style} onClick={handleSelect}>
        <input type="checkbox" className="mr-3"/>
            {title} BDT
            
            </p>
    </div>
    );
};

export default FilterFees;