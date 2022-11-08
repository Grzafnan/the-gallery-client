import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Reviews = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  // console.log(id);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'Unregistered';
    const photoUrl = form.photoUrl.value;
    const message = form.message.value;

    // console.log(name, email, photoUrl, message);


  }



  return (
    <>
      <section className='py-10'>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-blue-900"></span>
                  <h2 className="ml-4 font-medium">Reviews</h2>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            alt="Trainer"
                            src="https://images.unsplash.com/photo-1565299999261-28ba859019bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          />

                          <div className="ml-4">
                            <p className="text-base">Vibrant Trainers</p>

                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">Blue</dd>
                              </div>

                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">UK 10</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-base">
                            $49.99
                            <small className="text-gray-500">x1</small>
                          </p>
                        </div>
                      </li>

                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            alt="Lettuce"
                            src="https://images.unsplash.com/photo-1640958904159-51ae08bd3412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          />

                          <div className="ml-4">
                            <p className="text-base">Lettuce</p>

                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">Big</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-base">
                            $25
                            <small className="text-gray-500">x2</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label className="mb-1 block text-base text-gray-600" htmlFor="first_name">
                      Name
                    </label>

                    <input
                      className="w-full rounded-lg border-gray-200 p-2.5 text-base shadow-sm"
                      type="text"
                      name='firstName'
                      id="first_name"
                      required
                    />
                  </div>

                  <div className="col-span-3">
                    <label className="mb-1 block text-base text-gray-600" name='last_name' htmlFor="last_name">
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
                        <textarea id="about" name="message" required className="w-full bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows={5} defaultValue={""} />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;