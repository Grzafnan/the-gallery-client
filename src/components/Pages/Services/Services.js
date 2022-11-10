import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import Loader from '../Utilities/Loader';
import useTitle from '../../../hooks/useTitle';


const Services = () => {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(false);
  // console.log(services);

  useTitle('Services')

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  useEffect(() => {
    setLoading(true)
    axios.get('https://the-gallery-server.vercel.app/services')
      .then(res => {
        setServices(res?.data?.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      {
        loading ? (
          <Loader />
        )
          : (
            <div className=" 2xl:container 2xl:mx-auto">
              <div className=" pt-6 pb-16 lg:px-20 md:px-6 px-4">
                <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6">
                  {
                    services?.map(service => <ServiceCard
                      key={service._id}
                      service={service}
                    />)
                  }
                </div>
              </div>
            </div>
          )
      }


    </>
  );
};

export default Services;