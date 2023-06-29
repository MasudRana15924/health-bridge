import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expertRemoved, expertSelected } from '../../state/filter/filterReducer';


const FilterTag = ({title}) => {
    const dispatch = useDispatch();
    const { experts } = useSelector(state => state.filter)

    const isSelected =experts.includes(title) ? true : false

    const style = isSelected ?  'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1 lg:ml-64' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 lg:ml-64'
    const handleSelect = () => {
        if (isSelected) {
             dispatch(expertRemoved(title));
        } else {
             dispatch(expertSelected(title));
        }
    }
    return (
        <div>
            {/* <p className="w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-3 lg:ml-64">{title}</p> */}
            <p className={style} onClick={handleSelect}>
            <input type="checkbox" className="mr-3"/>
                {title}
                
                </p>
        </div>
    );
};

export default FilterTag;