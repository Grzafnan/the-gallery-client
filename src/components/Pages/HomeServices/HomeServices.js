import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeServiceCard from './HomeServiceCard';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  const [services, setServices] = useState([]);
  // console.log(services);

  useEffect(() => {
    axios.get('http://localhost:5000/home-services')
      .then(res => setServices(res.data.data))
      .catch(err => console.log(err));
  }, [])





  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-5xl text-4xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Take a look at my works</p>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">

          {
            services?.map(service => <HomeServiceCard key={service._id} service={service} />)
          }


        </div>
        <div className=" flex justify-center items-center">
          <Link to='/services'>
            <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-12 md:mt-12 mt-10 text-white font-semibold text-base leading-4">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;