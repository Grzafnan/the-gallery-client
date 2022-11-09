import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const ReviewModal = ({ editReview, showModal, setShowModal }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        {
          showModal ?
            <>
              <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="button">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                  <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width={52} height={52} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                      </svg>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> Edit Review</h1>
                    <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                      Email
                    </label>
                    <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" defaultValue={user?.email} readOnly />
                    {/* <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                      Write Review
                    </label>
                    <div className="relative mb-5 mt-2">
                      <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={3} y={5} width={18} height={14} rx={3} />
                          <line x1={3} y1={10} x2={21} y2={10} />
                          <line x1={7} y1={15} x2="7.01" y2={15} />
                          <line x1={11} y1={15} x2={13} y2={15} />
                        </svg>
                      </div>
                      <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                    </div> */}


                    <fieldset className="">
                      <legend className="mb-1 block text-base text-gray-600">
                        Write A Review
                      </legend>

                      <div className="-space-y-px rounded-lg bg-white shadow-sm">
                        <div className=' mb-4'>
                          <textarea id="about" name="message" required className="w-full bg-transparent border rounded-lg border-gray-200 pl-3 py-3 shadow-sm text-base focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let write a review" rows={5} defaultValue={editReview.message} />
                        </div>

                      </div>
                    </fieldset>



                    <div className="flex items-center justify-start w-full">
                      <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                        Cancel
                      </button>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={() => setShowModal(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </>
            : null
        }
      </div>
    </>
  );
};

export default ReviewModal;