import React from 'react';

// Importing Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import NewArrival from '../components/NewArrival';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <NewArrival />
        </div>
    );
};

export default HomePage;