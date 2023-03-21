import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Availability from './Availability/Availability';
import Carousle from './Carousle/Carousle';
import GetStarted from './GetStarted/GetStarted';
import Tent from './Tent/Tent';

const Home = () => {
    return (
        <div>
            <Carousle></Carousle>
            <Tent></Tent>
            <Availability></Availability>
            <AboutUs></AboutUs>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;