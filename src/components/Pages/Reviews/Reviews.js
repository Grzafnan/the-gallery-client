import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';

const Reviews = ({ serviceName }) => {
  const { id } = useParams();
  const { user, setReviewCount } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'Unregistered';
    const photoUrl = form.photoUrl.value;
    const message = form.message.value;


    const review = {
      name,
      email,
      photoUrl,
      serviceId: id,
      serviceName: serviceName,
      reviewDate: new Date().toLocaleString(),
      message
    }

    if (name) {
      axios.post(`https://the-gallery-server.vercel.app/review`, review, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("aceessToken")}`,
        },
      })
        .then(res => {
          if (res.data?.insertedId) {
            toast.success("Review added successfully", { autoClose: 1000 });
            event.target.reset();
            setRefresh(!refresh);
          }
          else {
            toast.error("Can't added review.", { autoClose: 1000 });
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      toast.error(`Provide Valid Information`);
    }
  };

  useEffect(() => {
    axios.get(`https://the-gallery-server.vercel.app/review/${id}`)
      .then(res => {
        if (res?.data?.success) {
          setReviews(res.data.data);
          setReviewCount(res?.data?.data?.length);
        }
        else {
          toast.error(`Could not get review for ${id}`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [id, setReviewCount, refresh])

  // console.log(reviews);

  return (
    <>
      <section className='py-10'>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className=" px-4 lg:px-8">
                <div className="flex items-center">
                  {/* <span className="h-10 w-10 rounded-full bg-green-700">
                  </span> */}
                  <MdOutlineRateReview className="h-10 w-10" />
                  <h2 className="ml-2 text-xl font-semibold">Client Reviews</h2>
                </div>
                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 ">
                      {
                        reviews.length > 0 ? <>
                          {
                            reviews?.map(review => (
                              <li key={review._id} className="flex items-center justify-between py-4">
                                <div className="bg-white w-full shadow rounded p-4 xl:p-8">
                                  <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                                  <div className="pl-4 pt-4 flex items-start justify-between">
                                    <div className="mr-6">
                                      <p className=" text-gray-700">
                                        {review?.message.length > 100 ? review?.message.slice(0, 100) + '...' : review?.message}
                                      </p>
                                      <p className="mt-4 text-base font-semibold leading-none text-gray-800">{review?.name}</p>
                                      <p className='text-xs py-1'>
                                        {review?.reviewDate}
                                      </p>
                                    </div>
                                    <img src={review?.photoUrl} className='w-16 rounded-full' alt={review?.name} role="img" />
                                  </div>
                                </div>


                              </li>)
                            )
                          }
                        </>
                          :
                          <li className="flex items-center justify-between py-4">
                            <div className="flex justify-center w-full">
                              <p className='text-lg font-semibold text-center bg-gray-200 py-2 w-full rounded'>
                                No Reviews Available.
                              </p>
                            </div>
                          </li>
                      }

                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {
              user?.email ?
                <>
                  <div className="bg-white shadow-sm py-12 mx-4 md:py-24">
                    <div className="mx-auto md:w-3/4 lg:max-w-lg px-4 lg:px-8">
                      <h2 className='text-xl font-semibold mb-4'>Add a Review</h2>
                      <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                        <div className="col-span-3">
                          <label className="mb-1 block text-base text-gray-700" htmlFor="firstName">
                            Name
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-400 p-2.5 text-base shadow-sm"
                            type="text"
                            name='firstName'
                            id="firstName"
                            required
                          />
                        </div>

                        <div className="col-span-3">
                          <label className="mb-1 block text-base text-gray-700" name='lastName' htmlFor="last_name">
                            Last Name
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-400 p-2.5 text-base shadow-sm"
                            type="text"
                            name='lastName'
                            id="last_name"
                          />
                        </div>

                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-700" htmlFor="email">
                            Email
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-400 p-2.5 text-base shadow-sm"
                            type="email"
                            id="email"
                            name='email'
                            defaultValue={user?.email}
                            readOnly
                          />
                        </div>

                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-700" htmlFor="photoUrl">
                            PhotoUrl
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-400 p-2.5 text-base shadow-sm"
                            type="text"
                            name='photoUrl'
                            id="photoUrl"
                          />
                        </div>

                        <fieldset className="col-span-6">
                          <legend className="mb-1 block text-base text-gray-700">
                            Write A Review
                          </legend>

                          <div className="-space-y-px rounded-lg bg-white shadow-sm">
                            <div className=''>
                              <textarea id="about" name="message" required className="w-full bg-transparent border rounded-lg border-gray-400 pl-3 py-3 shadow-sm text-base focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let's write a review" rows={5} defaultValue={""} />
                            </div>

                          </div>
                        </fieldset>
                        <div className="col-span-6">
                          <button
                            className="block w-full rounded-lg hover:bg-gray-900 transition-all ease-in-out bg-gray-800 p-2.5 text-md font-semibold text-white"
                            type="submit"
                          >
                            Add Review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
                :
                <>
                  <div className='h-full bg-gray-50 py-12 md:py-24'>
                    <div className="flex flex-col items-center justify-center h-full">
                      <h3 className='text-xl bg-gray-200 py-2 px-4 rounded font-semibold mb-12'> If you want to add a review, Please Log in first. </h3>
                      <Link to='/login'>
                        <button className='bg-gray-800 hover:bg-gray-900 text-base text-white font-semibold py-2 px-6 rounded transition-all ease-in-out'>
                          Log in
                        </button>
                      </Link>

                    </div>
                  </div>
                </>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;