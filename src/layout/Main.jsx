import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Navbar/Nav';
import Fotter from '../Pages/Shared/Fotter/Fotter';

const Main = () => {
    return (
        <div className=' bg-[#EEEFF0]'>
            <Nav className="bg-[#EEEFF0]" ></Nav>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;