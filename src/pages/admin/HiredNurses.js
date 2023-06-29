import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loader/Loading';
import HiredNurse from './HiredNurse';
import { fetchAdminHiredNurses } from '../../state/admin/AllHiredNursesSlice';
import Pagination from 'react-js-pagination';
import UserSidebar from '../user/UserSidebar';

const HiredNurses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { hireNurses, resultPerPage, appointmentCount, isLoading, isError, error } = useSelector(state => state.allhiredNurses.allhiredNurses);
    useEffect(() => {
        dispatch(fetchAdminHiredNurses({ userToken }));
    }, [dispatch, userToken]);
   
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
      };
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && hireNurses?.length === 0) {
        content = <div className="col-span-12  ">
            <div className="alert alert-error shadow-lg text-start  mt-5 h-12 w-2/4 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Hired Nurses Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && hireNurses?.length > 0) {
        content = hireNurses.map(nurse => <HiredNurse key={nurse._id} nurse={nurse} />)
    }
    return (
        <div className="p-10 bg-white mt-20 mb-20">
        <div className="flex">
            <div className="w-1/4">
                <UserSidebar></UserSidebar>
            </div>

            <div className="w-3/4 ">
            <p className="text-start font-bold mb-5 text-2xl">All Hired Nurses</p>
            <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                
                                <th>Image</th>
                                <th>Nurses</th>
                                <th>Fees</th>
                                <th>Patient</th>
                                <th>Patient Gender</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                              {content}
                        </tbody>

                    </table>
                </div>
              
                {
                    resultPerPage ? <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={appointmentCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>:null
                }
            </div>

        </div>
    </div>
    );
};

export default HiredNurses;