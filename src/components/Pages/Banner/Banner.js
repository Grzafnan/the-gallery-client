import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

// import './banner.module.css'


import image1 from '../../../assets/img1.jpg'
import image2 from '../../../assets/img2.jpg'
import image3 from '../../../assets/img3.jpg'



const Banner = () => {
  SwiperCore.use([Autoplay])
  const pagination = {
    clickable: true
  }


  return (
    <section className="w-[95%] mx-auto">
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1000}
        navigation={true}
        modules={[Navigation]}
        pagination={pagination}
        breakpoints={{
          // when window width is >= 640px
          414: {
            // width: 414,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          896: {
            // width: 896,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="">
          <img className="w-full  h-[50vh] lg:h-[80vh] " src={image1} alt="" />
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="md:text-4xl lg:text-6xl text-gray-100 font-bold font-serif">
              Wedding in Dhaka
            </h3>
            <p className="capitalize text-xl text-gray-100 font-semibold font-serif py-4 lg:py-8">
              Destination Photographer
            </p>
            <button className=" py-2 px-6 rounded font-semibold bg-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out">
              Find More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[50vh] lg:h-[80vh]" src={image2} alt="" />
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="md:text-4xl lg:text-6xl text-gray-100 font-bold font-serif">
              My Personal Work
            </h3>
            <p className="capitalize text-xl text-gray-100 font-semibold font-serif py-4 lg:py-8">
              Lovely Places
            </p>
            <button className=" py-2 px-6 rounded font-semibold bg-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out">
              Find More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[50vh] lg:h-[80vh]" src={image3} alt="" />
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="md:text-4xl lg:text-6xl text-gray-100 font-bold font-serif">
              Discover My Portfolio
            </h3>
            <p className="capitalize text-xl text-gray-100 font-semibold font-serif py-4 lg:py-8">
              Featured Work
            </p>
            <button className=" py-2 px-6 rounded font-semibold bg-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out">
              Find More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
};

export default Banner;