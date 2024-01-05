import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Navbar/Nav';

const Main = () => {
    return (
        <div className='max-w-[1300px] mx-auto bg-[#EEEFF0]'>
            <Nav  ></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;