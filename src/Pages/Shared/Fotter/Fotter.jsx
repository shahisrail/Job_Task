import React from "react";
import { FaArrowRight, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className="bg-[#EE9E1E]  ">
      <div className="flex gap-5 max-w-[1300px] mx-auto p-5 lg:p-10">
        <div className="flex-1 ">
          <input
            type="text"
            placeholder="Enter Your Email"
            
            className="input input-bordered input-warning w-full mt-10  lg:mt-32 "
          />
          <button className="btn  relative left-[580px] rounded-3xl text-white bottom-12 bg-[#E85E2A] ">Subscrive <FaArrowRight></FaArrowRight>  </button>

          <div>
            <div className="mt-5 lg:mt-36">
              <h2 className="text-2xl font-bold text-center lg:text-start">
                pti.
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 justify-between">
              <p className="lg:p-5 text-[14px]  font-bold text-center lg:text-start">
                Copyright©Tripp.All Right Reserved{" "}
              </p>
              <div className="flex gap-3 justify-center">
                <h2 className=" lg:ml-0 mt-5 ">
                  {" "}
                  <FaGoogle className=" bg-[#E85E2A] text-white lg:text-[#E85E2A] lg:bg-white rounded-full text-4xl lg:text-3xl  p-2 lg:p-1 "></FaGoogle>
                </h2>
                <h2 className=" lg:ml-0 mt-5 ">
                  {" "}
                  <FaTwitter className=" bg-[#E85E2A] text-white lg:text-[#E85E2A] lg:bg-white rounded-full text-4xl lg:text-3xl p-2 lg:p-1 "></FaTwitter>
                </h2>
                <h2 className=" lg:ml-0 mt-5 ">
                  {" "}
                  <FaInstagram className=" bg-[#E85E2A] text-white lg:text-[#E85E2A] lg:bg-white rounded-full text-4xl lg:text-3xl p-2 lg:p-1 "></FaInstagram>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="https://i.postimg.cc/BQsKFPZX/Image2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fotter;
