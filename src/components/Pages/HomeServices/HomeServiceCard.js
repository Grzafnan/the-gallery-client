import React from 'react';
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const HomeServiceCard = ({ service }) => {
  const { _id, image, name, price, ratings, details } = service;


  return (
    <div data-aos="zoom-in-up" className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-md transition-all shadow-md hover:shadow-xl hover:scale-[1.02] ease-in-out ">
      <div>

        <PhotoProvider>
          <PhotoView src={image}>
            <img
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
              src={image}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <h2 className="mb-1 text-xl font-semibold">
          {name}
        </h2>
        <p className='text-md font-semibold mb-1'>
          Fee : ${price}
        </p>
        <p className="text-sm dark:text-gray-400">
          {
            details.slice(0, 100) + '...'
          }
        </p>

      </div>
      <div className="w-full">

        <Link to={`/service/${_id}`}>
          <button className='w-full py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all ease-in-out'> See Details</button>
        </Link>

      </div>
    </div>
  );
};

export default HomeServiceCard;