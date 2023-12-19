import React from 'react';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import PlayList from '../PlayList/PlayList';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PlayList/>
            <Subscribe/>
        </div>
    );
};

export default Home;