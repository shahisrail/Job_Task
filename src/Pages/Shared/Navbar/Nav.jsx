import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import  "./nav.css"


const Nav = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="navbar p-5 ">
        <div className="flex md:flex-1 ">
          <a className="font-bold text-1xl- md:text-2xl">pti.</a>
        </div>
        <div className="flex-1 gap-5 lg:gap-3">
          <div className="form-control">
        <div className="absolute">
        <IoSearch className=" text-2xl relative top-3.5 text-[#EE9E1E] left-7  mr-2" />
        </div>
            <input
              type="text"
            
              placeholder= "   Search Audiobook"
              className="input input-bordered  md:text-2xl w-[200px] ml-5 md:w-[500px] lg:w-[700px]"
            />
          </div>
          <div className="flex-none">
            <ul className="menu md:w-[200px]  px-1 text-[#EE9E1E] bg-white rounded-xl">
              <li>
                <details>
                  <summary className="text-1xl">MENU</summary>
                  <ul className="p-2  rounded-t-none">
                    <li>
                      <NavLink
                        className="nav-link"
                      
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/details"
                      >
                        Details
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="avatar hidden lg:block">
            <div className="w-14 rounded-full">
              <img
                className="bg-[#EE9E1E] "
                src="https://i.postimg.cc/Jz5y2Hj4/download-removebg-preview-6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
