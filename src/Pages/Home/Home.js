import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Availability from './Availability/Availability';
import Carousle from './Carousle/Carousle';
import GetStarted from './GetStarted/GetStarted';
import PopularService from './PopularService/PopularService';
import Tent from './Tent/Tent';

const Home = () => {
    return (
        <div>
            <Carousle></Carousle>
            <Tent></Tent>
            <Availability></Availability>
            <AboutUs></AboutUs>
            <GetStarted></GetStarted>
            <PopularService></PopularService>
        </div>
    );
};

export default Home;