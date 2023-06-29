import React from 'react';
import Banner from '../banner/Banner'
import Doctor from '../../pages/doctors/Doctor';
import Services from '../landingpage/Services';
import Acheivement from '../landingpage/Acheivement';
import Blog from '../landingpage/Blog';
import Nurses from '../../pages/nurses/Nurses';
import Insurances from '../landingpage/Insurances';





const Home = () => {
//    const componentDidMount=()=>{
       
//     (function(d, m){
//         var kommunicateSettings = 
//             {"appId":"b41009aba8e59500cfdf3865264f232a","popupWidget":true,"automaticChatOpenOnNavigation":true};
//         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//         window.kommunicate = m; m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});

//     }
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            <Acheivement></Acheivement>
            <Blog></Blog>
            <Nurses></Nurses>
            <Insurances></Insurances>

         
      
    
        </div>

    );
};

export default Home;