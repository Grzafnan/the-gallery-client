import React from 'react';
import { Link } from 'react-router-dom'


const HomeServiceCard = ({ service }) => {
  const { _id, image, name, ratings, details } = service;


  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div>
        <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg" />
        <h2 className="mb-1 text-xl font-semibold">
          {name}
        </h2>
        <p className="text-sm dark:text-gray-400">
          {
            details.slice(0, 100) + '...'
          }
        </p>
      </div>
      <div className="w-full">

        <Link to={`/service/${_id}`}>
          <button className='w-full py-2 rounded-lg bg-gray-700 text-white font-semibold'> See Details</button>
        </Link>

      </div>
    </div>
  );
};

export default HomeServiceCard;