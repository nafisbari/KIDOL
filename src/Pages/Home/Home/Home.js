import React from 'react';
import Toys from '../../Toys/Toys/Toys';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Toys></Toys>
            
        </div>
    );
};

export default Home;