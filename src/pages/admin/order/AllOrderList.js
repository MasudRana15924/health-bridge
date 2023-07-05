import React from 'react';
import UserSidebar from '../../user/UserSidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdminAllOrder } from '../../../state/admin/order/allOrderSlice';
import Loading from '../../loader/Loading';
import AllOrdersList from './AllOrdersList';

const AllOrderList = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { orders, isLoading, isError, error } = useSelector(state => state.allOrders.allOrders);
    useEffect(() => {
        dispatch(fetchAdminAllOrder({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && orders?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-2/4 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Users Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && orders?.length > 0) {
        content = orders.map(order => <AllOrdersList key={order._id} order={order} />)
    }
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="flex">
                <div className="w-1/4">
                    <UserSidebar></UserSidebar>
                </div>

                <div className="w-3/4 ">
                    <p className="text-start font-bold mb-5 text-2xl">All Appointments</p>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity </th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
};

export default AllOrderList;