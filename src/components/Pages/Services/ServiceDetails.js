import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import Loader from '../Utilities/Loader';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(false);
  const { reviewCount } = useContext(AuthContext);

  // console.log(service);

  useTitle('Service Detail')



  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  useEffect(() => {
    axios.get(`https://the-gallery-server.vercel.app/service/${id}`)
      .then(res => setService(res.data.data))
  }, [id])



  return (
    <>
      {
        loading ? (
          <Loader />
        )
          :
          (
            <section>
              <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-10 px-4">
                <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-8">

                  <div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{service?.name}</h2>
                    <div className=" flex flex-row justify-between  mt-5">
                      <div className=" flex flex-row space-x-3">
                        <p className='font-semibold'>
                          Ratings: {service?.ratings}/Star
                        </p>
                      </div>
                      <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">{reviewCount > 0 ? reviewCount : "No"} reviews</p>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{service?.details}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">$ {service?.price}</p>
                  </div>

                  <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                      <img src={service?.image} alt={service?.name} />
                    </div>
                  </div>
                </div>
              </div>
              <hr className=" bg-gray-200 w-full my-2" />

              <Reviews serviceName={service?.name} />

            </section>
          )
      }

    </>
  );
};

export default ServiceDetails;