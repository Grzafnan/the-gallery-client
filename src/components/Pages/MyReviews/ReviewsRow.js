import React from 'react';

const ReviewsRow = ({ idx, review }) => {

  const { _id, email, message, photoUrl, reviewDate, reviewTime, serviceId, name } = review;







  return (
    <>
      <tr>
        <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
          <strong>
            {idx + 1}
          </strong>
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {_id}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {email}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <p>
            {message.length > 60 ? message.slice(0, 60) + '...' : message}
          </p>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <button className='rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700 mr-2'>
            Edit
          </button>
          <button className='rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700'>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReviewsRow;