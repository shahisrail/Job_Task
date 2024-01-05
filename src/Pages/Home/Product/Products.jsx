import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, FreeMode, Navigation } from "swiper/modules";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="p-3">
      <h2>Popular</h2>
      <div className="flex justify-end mb-3">
        <button
          className="  font-bold py-2 px-4 rounded-l"
          onClick={goPrev}
          disabled={
            !swiperRef.current || swiperRef.current.swiper.activeIndex === 0
          }
        >
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
        </button>
        <button
          className=" font-bold py-2 px-4 rounded-r"
          onClick={goNext}
          disabled={
            !swiperRef.current ||
            swiperRef.current.swiper.activeIndex === posts.length - 1
          }
        >
          <FaArrowAltCircleRight></FaArrowAltCircleRight>
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.Id}>
            <div>
              <img className="h-[120px]" src={post.ImageUrl} alt={post.Name} />
              <h3>{post.Name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
