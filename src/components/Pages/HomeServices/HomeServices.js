import React from 'react';

const HomeServices = () => {
  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-5xl text-4xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Take a look at my works</p>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          <div className=" relative ">
            <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
              <p className="text-xs leading-3 text-gray-800">New</p>
            </div>
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img className=" w-full" src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png" alt="A girl Posing Img" />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
            <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
          </div>
          <div className=" relative">
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img className=" w-full" src="https://i.ibb.co/m6V0MzR/gs-Kd-Pc-Iye-Gg-1.png" alt="A girl wearing white suit and googgles" />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img className=" w-full" src="https://i.ibb.co/6g1KhhF/pexels-django-li-2956641-1.png" alt="A girl wearing dark blue suit and posing" />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
            <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-12 md:mt-12 mt-10 text-white font-medium text-base leading-4">See More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;