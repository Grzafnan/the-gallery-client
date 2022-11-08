import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import FollowUs from '../FollowUs/FollowUs';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeServices from '../HomeServices/HomeServices';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Shared/Footer/Footer';
import Loader from '../Utilities/Loader';

const Root = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


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
              <NewsLetter />
              <FollowUs />
              <Footer />
            </>
          )
      }
    </>
  );
};

export default Root;