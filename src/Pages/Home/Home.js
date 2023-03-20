import React from 'react';
import Availability from './Availability/Availability';
import Carousle from './Carousle/Carousle';
import Tent from './Tent/Tent';

const Home = () => {
    return (
        <div>
            <Carousle></Carousle>
            <Tent></Tent>
            <Availability></Availability>
        </div>
    );
};

export default Home;