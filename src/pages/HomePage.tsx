import React from 'react';

// Importing Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import NewArrival from '../components/NewArrival';
import Brands from '../components/Brands';
import Collections from '../components/Collections';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <NewArrival />
            <Brands />
            <Collections />
        </div>
    );
};

export default HomePage;