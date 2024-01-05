import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="navbar p-5 ">
        <div className="flex md:flex-1 ">
          <a className="font-bold text-2xl">pti.</a>
        </div>
        <div className="flex-1 gap-10">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[185px] ml-5 md:w-[500px] lg:w-[700px]"
            />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 bg-white rounded-2xl">
              <li>
                <details>
                  <summary className="text-1xl">MENU</summary>
                  <ul className="p-2  rounded-t-none">
                    <li>
                     <NavLink to='/'>Home</NavLink>
                    </li>
                   
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
         

          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
