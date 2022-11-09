import React from 'react';
import { Link } from 'react-router-dom'

const ReviewsRow = ({ idx, review, handleDelete }) => {

  const { _id, email, message, photoUrl, reviewDate, reviewTime, serviceId, name } = review;




  return (
    <>

      <tr className=''>
        <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
          <strong>
            {idx + 1}
          </strong>
        </td>
        <td className=" px-4 py-2 font-medium text-gray-900">
          {_id}
        </td>
        <td className=" px-4 py-2 text-gray-700">
          {email}
        </td>
        <td className=" px-4 py-2 w-1/4 text-gray-700">
          <p>
            {/* {message.length > 60 ? message.slice(0, 60) + '...' : message} */}
            {message}
          </p>
        </td>
        <td className=" px-4 py-2">
          {/* flex max-h-full justify-center items-center */}
          <div className='flex justify-center items-center'>
            <span
              className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
            >
              <Link to={`/edit-review/${_id}`}>
                <button
                  className="inline-block bg-green-100 p-3 text-gray-700 hover:bg-green-200 focus:relative"
                  title="Edit Product"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="inline-block p-3 bg-red-100 text-gray-700 hover:bg-red-200 focus:relative"
                title="Delete Product"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </span>

          </div>
        </td>
      </tr>

    </>
  );
};

export default ReviewsRow;