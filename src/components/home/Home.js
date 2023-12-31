import React from 'react';
import Banner from '../banner/Banner'
import Doctor from '../../pages/doctors/Doctor';
import Services from '../landingpage/Services';
import Acheivement from '../landingpage/Acheivement';
import Blog from '../landingpage/Blog';
import Nurses from '../../pages/nurses/Nurses';
import Insurances from '../landingpage/Insurances';
import Partner from '../landingpage/Partner';
import Collab from '../landingpage/Collab';
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            {/* <Services></Services> */}
            
            <Doctor></Doctor>
            <Collab></Collab>
            {/* <Acheivement></Acheivement> */}
            {/* <Blog></Blog> */}
            <Nurses></Nurses>
            <Partner></Partner>
            <Insurances></Insurances>
        </div>
    );
};
export default Home;