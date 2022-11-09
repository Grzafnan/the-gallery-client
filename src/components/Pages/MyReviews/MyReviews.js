import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import ReviewsRow from './ReviewsRow';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    axios.get(`http://localhost:5000/my-reviews?email=${user?.email}`)
      .then(res => {
        setReviews(res.data.data);
      })
  }, [user?.email]);







  return (
    <>

      <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full table-auto divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                SL
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div className="flex items-center gap-2">
                  ID

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div className="flex items-center gap-2">
                  Email

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div className="flex items-center gap-2">
                  Review

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              reviews?.length > 0 ?
                <>
                  {
                    reviews?.map((review, idx) => <ReviewsRow
                      key={idx}
                      review={review}
                      idx={idx}
                    />)
                  }
                </>
                :
                <>
                  <tr className=''>
                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">

                    </td>
                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">

                    </td>
                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">

                    </td>
                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">
                      No orders found!
                    </td>

                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">

                    </td>

                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">
                    </td>

                    <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">
                    </td>
                  </tr>
                </>
            }
          </tbody>
        </table>
      </div>

    </>
  );
};

export default MyReviews;