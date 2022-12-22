import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import FollowUs from '../FollowUs/FollowUs';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeServices from '../HomeServices/HomeServices';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonials from '../Testimonials/Testimonials';
import Loader from '../Utilities/Loader';


const Root = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useTitle('Home');

  return (
    <>
      {
        loading ? (
          <Loader />
        ) :
          (
            <>
              <Banner />
              <HomeAbout />
              <HomeServices />
              <Testimonials />
              <NewsLetter />
              <FollowUs />
            </>
          )
      }
    </>
  );
};

export default Root;