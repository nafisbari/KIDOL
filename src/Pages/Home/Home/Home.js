import React from 'react';
import Toys from '../../Toys/Toys/Toys';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import ReviewsAll from '../Review/ReviewsAll';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Toys></Toys>
            <ReviewsAll></ReviewsAll>

        </div>
    );
};

export default Home;