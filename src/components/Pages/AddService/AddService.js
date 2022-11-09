import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import image from '../../../assets/service.json'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../Utilities/Loader';


const AddService = () => {
  const [ratings, setRatings] = useState(null);
  const { loading } = useContext(AuthContext);


  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const handelSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.serviceName.value;
    const image = form.imageUrl.value;
    const price = form.price.value;
    const details = form.details.value;
    // console.log(name, image, price, ratings, details);

    const service = {
      name,
      image,
      price,
      ratings,
      details
    }


    if (name) {
      axios.post(`http://localhost:5000/services`,
        service,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("aceessToken")}`,
          },
        })
        .then(res => {
          if (res.data?.success) {
            toast.success(res?.data?.message, { autoClose: 1000 });
            event.target.reset();
            navigate('/');
          }
          else {
            toast.error(res?.data?.error, { autoClose: 1000 });
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      toast.error("Provide valid information!", { autoClose: 1000 });
    }
  };


  return (
    <>
      {
        loading ? (
          <Loader />
        )
          :
          <>
            (
            <section className='py-10'>
              <h1 className='text-center capitalize font-semibold py-4 font-serif text-blue-600 text-3xl md:text-4xl '>Add a Service </h1>
              <div className="relative mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="py-12 w-3/4 mx-auto md:py-24">
                    <Lottie options={defaultOptions} />
                  </div>

                  <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                      <form onSubmit={handelSubmit} className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-600" htmlFor="serviceName">
                            Service Name
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            name='serviceName'
                            type="text"
                            id="serviceName"
                            placeholder=''
                            required
                          />
                        </div>
                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-600" htmlFor="imageUrl">
                            Photo Url
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            type="text"
                            name='imageUrl'
                            id="imageUrl"
                            required
                          />
                        </div>

                        <div className="col-span-6">
                          <label className="mb-1 block text-base text-gray-600" htmlFor="price">
                            Price
                          </label>

                          <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                            type="number"
                            name='price'
                            id="price"
                            required
                          />
                        </div>
                        <fieldset className="col-span-6">
                          <legend className="mb-1 block text-base text-gray-600">
                            Ratings
                          </legend>

                          <div className="-space-y-px rounded-lg bg-white shadow-sm">
                            <div>
                              <label className="sr-only" htmlFor="country">ratings</label>

                              <select
                                onChange={e => setRatings(e.target.value)}
                                className="relative w-full rounded-lg border-gray-200 p-2.5 text-base focus:z-10"
                                id="country"
                                name="ratings"
                                autoComplete="country-name"
                                required
                              >
                                <option>2</option>
                                <option>3</option>
                                <option>3.5</option>
                                <option>4</option>
                                <option>4.5</option>
                                <option defaultValue={"5"}>5</option>
                              </select>
                            </div>
                          </div>
                        </fieldset>

                        <fieldset className="col-span-6">
                          <legend className="mb-1 block text-base text-gray-600">
                            Write a description
                          </legend>

                          <div className="-space-y-px rounded-lg bg-white shadow-sm">
                            <div className=''>
                              <textarea id="about" name="details" required className="w-full bg-transparent border rounded-lg border-gray-200 pl-3 py-3 shadow-sm text-base focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let write a review" rows={5} defaultValue={""} />
                            </div>

                          </div>
                        </fieldset>

                        <div className="col-span-6">
                          <button
                            className="block w-full rounded-lg hover:bg-gray-900 transition-all ease-in-out bg-gray-700 p-2.5 text-lg font-semibold text-white"
                            type="submit"
                          >
                            Add Service
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            )
          </>
      }

    </>
  );
};

export default AddService;