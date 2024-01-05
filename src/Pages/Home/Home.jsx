import React from 'react';
import Banner from './Banner/Banner';
import Products from './Product/Products';

const Home = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;