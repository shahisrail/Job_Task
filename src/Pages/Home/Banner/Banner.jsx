import React from "react";

const Banner = () => {
  return (
    <div className="p-5 md:mt-16">
      <div className="  bg-[#EE9E1E] rounded-xl hidden lg:block">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.postimg.cc/1XJ89fZt/Image1.png" className="" />
          <div className="ml-10">
            <h1 className="text-5xl  text-white font-bold">
              Deliver Food To Your Door Steapl
            </h1>
            <p className="py-6  text-blue-50">
              Authentic Foodl,Quick Service,Fast Delivery
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="">
          <h1 className="text-3xl text-center text-black font-bold">
            Deliver Food To Your Door Steapl
          </h1>
          <p className="py-6 text-[20px] text-center">
            Authentic Foodl,Quick Service,Fast Delivery
          </p>
        </div>
        <div className="  bg-[#ED925D] rounded-xl ">
          <img
            src="https://i.postimg.cc/1XJ89fZt/Image1.png"
            className="  w-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
