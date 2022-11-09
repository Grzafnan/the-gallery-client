import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({})
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:5000/my-review/${id}`)
      .then(res => {
        if (res.data.success) {
          setReview(res.data.data)
        }
      })
  }, [id, refresh])


  const handelSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const status = {
      message
    }

    axios.put(`http://localhost:5000/my-review/${id}`,
      status
      , {
        headers: {
          authorization: `Bearer ${localStorage.getItem("aceessToken")}`,
        },
      })
      .then(res => {
        if (res?.data?.success) {
          toast.success(res?.data?.message, { autoClose: 1000 });
          event.target.reset();
          setRefresh(!refresh)
          navigate('../my-reviews');
        }
        else {
          toast.error(res?.data?.message, { autoClose: 1000 });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className=' my-20'>
      <form onSubmit={handelSubmit} className='w-2/4 mx-auto'>
        <fieldset className="">
          <legend className="mb-1 block text-xl font-semibold text-gray-600">
            Edit Review
          </legend>

          <div className="-space-y-px rounded-lg bg-white shadow-sm">
            <div className=''>
              <textarea id="about" name="message" required className="w-full bg-transparent border rounded-lg border-gray-200 pl-3 py-3 shadow-sm text-base focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let write a review" rows={5} defaultValue={review?.message} />
            </div>
          </div>
        </fieldset>
        <div className="mt-4">
          <button
            className="block w-full rounded-lg hover:bg-gray-900 transition-all ease-in-out bg-gray-800 p-2.5 text-md font-semibold text-white"
            type="submit"
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;