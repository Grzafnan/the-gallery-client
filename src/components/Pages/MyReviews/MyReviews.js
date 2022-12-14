import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import ReviewsRow from './ReviewsRow';
import Swal from 'sweetalert2'
import Loader from '../Utilities/Loader';
import useTitle from '../../../hooks/useTitle';


const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useTitle('My Reviews');

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);



  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`https://the-gallery-server.vercel.app/my-reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('aceessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data.data);
        setReviews(data.data);
        setLoading(false);
      });
  }, [user?.email, logOut, refresh])






  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete the review!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://the-gallery-server.vercel.app/my-review/${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("aceessToken")}`,
          },
        })
          .then((res) => {
            if (res.data.success) {
              Swal.fire(
                'Deleted!',
                'Successfully deleted the review.',
                'success'
              )
              setRefresh(!refresh);
            } else {
              toast.error("cant delete review");
            }
          })
          .catch(err => {
            // console.log(err);
            toast.error(err)
          });
      };
    });
  };


  return (
    <>
      {
        loading ? (
          <Loader />
        )
          :
          (
            <div className="overflow-hidden w-full overflow-x-auto rounded-lg border border-gray-200 my-4">
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
                        Service Name

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
                        Date

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
                      className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900"
                    >
                      Action
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
                            handleDelete={handleDelete}
                          />)
                        }
                      </>
                      :
                      <>
                        <tr>
                          <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">

                          </td>
                          <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">

                          </td>
                          <td className="px-2 py-5 bg-red-600 text-white text-2xl font-semibold text-center">
                            No Review found!
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

          )
      }




    </>
  );
};

export default MyReviews;