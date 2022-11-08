import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { AuthContext } from '../../../contexts/AuthProvider';

const Services = () => {

  const [services, setServices] = useState([]);
  // console.log(services);


  useEffect(() => {
    axios.get('http://localhost:5000/services')
      .then(res => setServices(res.data.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {
            services.map(service => <ServiceCard
              key={service._id}
              service={service}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;