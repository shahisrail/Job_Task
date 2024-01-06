import React from 'react';
import Banner from './Banner/Banner';
import Products from './Product/Products';
import Recomend from './IsRecomended/Recomend';

const Home = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <Banner></Banner>
            <Products></Products>
            <Recomend></Recomend>
        </div>
    );
};

export default Home;