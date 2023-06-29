import React from 'react';
import { useDispatch} from 'react-redux';
import { deleteUser } from '../../state/admin/delete/useDeleteSlice';
import { ToastContainer, toast } from 'react-toastify';


const AllUser = ({user}) => {
    const{_id,image,name,email}=user;
    const dispatch = useDispatch();
    const deleteUserHandler = (_id) => {
        dispatch(deleteUser(_id));
        toast.success('User Delete Successful');
      };
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email} </td>
            <td>edit</td>
            <td>
           <button  onClick={() =>
                deleteUserHandler(_id)
              }>delete</button>
            </td>
          
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
        </tr>
    
    
    );
};

export default AllUser;