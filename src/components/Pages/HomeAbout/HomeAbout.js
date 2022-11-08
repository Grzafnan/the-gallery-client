import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";
import signature from '../../../assets/signature.png'
import aboutLogo from '../../../assets/about-logo.avif'

const HomeAbout = () => {
  return (
    <section>
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="lg:flex mx-auto lg:w-3/4 items-center justify-between">
          <div className="lg:w-5/12 flex justify-center md:items-start lg:justify-end lg:pr-20">
            <img className='w-8/12 lg:w-3/4 rounded-full' src={aboutLogo} alt="about logo" />
          </div>
          <div className="lg:w-7/12 lg:mt-0 mt-8">
            <div className="w-full h-full">
              <h2 className='text-3xl font-serif text-start md:text-5xl font-bold'>
                Hi there, I am Afnan. I am photographer, traveler and I love to capture your unique moments.
              </h2>
              <p className='text-base py-8 text-justify'>
                Does this sound familiar? It’s the day of your photo session … the kids are fighting, the baby pooped his pants, and you still don’t know what you’re wearing. Then there’s the outfits, the weather, and the attitudes (from the toddler, the teen, or the less-than-pumped husband).
                You arrive and try to corral your children and smile through the circus that is this season of life. On the way home, you cross your fingers and pray that you got at least ONE good photo.
              </p>
              <div className='pb-10 flex justify-between w-[20%]'>
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaTwitter />
                </button>
                <button>
                  <FaInstagram />
                </button>
              </div>
              <div>
                <img className='w-40' src={signature} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='flex lg:w-3/4 mx-auto justify-between items-center lg:px-20 md:px-6 px-4 py-10'>
          <div className=''>
            <div className='flex justify-center py-6'>
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
            </div>
            <div>
              <p className='text-md uppercase font-semibold'>
                PHOTOGRAPHER OF THE YEAR 2018
              </p>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-center py-6'>
              <FaStar className='text-yellow-600 text-xl ' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
            </div>
            <div>
              <p className='text-md uppercase font-semibold'>
                BEST WEDDING PHOTO 2018
              </p>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-center py-6'>
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
              <FaStar className='text-yellow-600 text-xl' />
            </div>
            <div>
              <p className='text-md uppercase font-semibold'>
                BEST PORTRAIT 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;