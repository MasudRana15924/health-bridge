import React from 'react';
import Banner from '../banner/Banner'
import Doctor from '../../pages/doctors/Doctor';
import Services from '../landingpage/Services';
import Acheivement from '../landingpage/Acheivement';
import Blog from '../landingpage/Blog';
import Nurses from '../../pages/nurses/Nurses';
import Insurances from '../landingpage/Insurances';
import FilterTags from '../../pages/DoctorsList/FilterTags';
import Filter from '../landingpage/Filter';

const Home = () => {

    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            {/* <Filter></Filter> */}
            <Doctor></Doctor>
            <Acheivement></Acheivement>
            <Blog></Blog>
            <Nurses></Nurses>
            <Insurances></Insurances>

         
      
    
        </div>

    );
};

export default Home;