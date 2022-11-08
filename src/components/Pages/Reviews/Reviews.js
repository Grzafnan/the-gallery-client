import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'Unregistered';
    const photoUrl = form.photoUrl.value;
    const message = form.message.value;

    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const review = {
      name,
      email,
      photoUrl,
      serviceId: id,
      reviewDate: new Date().toDateString(),
      reviewTime: time,
      message
    }

    if (name) {
      axios.post(`http://localhost:5000/review`, review, {
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
    axios.get(`http://localhost:5000/review/${id}`)
      .then(res => {
        if (res.data.success) {
          setReviews(res.data.data);
        }
        else {
          toast.error(`Could not get review for ${id}`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [id, refresh])



  return (
    <>
      <section className='py-10'>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="flex items-center">
                  {/* <span className="h-10 w-10 rounded-full bg-green-700">
                  </span> */}
                  <MdOutlineRateReview className="h-10 w-10" />
                  <h2 className="ml-2 text-xl font-semibold">Client Reviews</h2>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      {
                        reviews.length > 0 ? <>
                          {
                            reviews?.map(review => (<li key={review._id} className="flex items-center justify-between py-4">
                              <div className="flex items-start">
                                <img
                                  alt="Trainer"
                                  src={review?.photoUrl}
                                  className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                />

                                <div className="ml-4">
                                  <p className="text-base">
                                    {review?.name}
                                  </p>
                                  <dl className="mt-1 space-y-1 text-xs text-gray-600">
                                    <div>
                                      <p>
                                        {review?.message.slice(0, 100)}
                                      </p>
                                    </div>
                                  </dl>
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
                  <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                      <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                        <div className="col-span-3">
                          <label className="mb-1 block text-base text-gray-600" htmlFor="firstName">
                            Name
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            type="text"
                            name='firstName'
                            id="firstName"
                            required
                          />
                        </div>

                        <div className="col-span-3">
                          <label className="mb-1 block text-base text-gray-600" name='lastName' htmlFor="last_name">
                            Last Name
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            type="text"
                            name='lastName'
                            id="last_name"
                          />
                        </div>

                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-600" htmlFor="email">
                            Email
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            type="email"
                            id="email"
                            name='email'
                            defaultValue={user?.email}
                            readOnly
                          />
                        </div>

                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-600" htmlFor="photoUrl">
                            PhotoUrl
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            type="text"
                            name='photoUrl'
                            id="photoUrl"
                          />
                        </div>

                        <fieldset className="col-span-6">
                          <legend className="mb-1 block text-base text-gray-600">
                            Write A Review
                          </legend>

                          <div className="-space-y-px rounded-lg bg-white shadow-sm">
                            <div className=''>
                              <textarea id="about" name="message" required className="w-full bg-transparent border rounded-lg border-gray-200 pl-3 py-3 shadow-sm text-base focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let write a review" rows={5} defaultValue={""} />
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