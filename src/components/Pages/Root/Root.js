import React from 'react';
import Banner from '../Banner/Banner';
import FollowUs from '../FollowUs/FollowUs';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeServices from '../HomeServices/HomeServices';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <HomeServices />
      <NewsLetter />
      <FollowUs />
      <Footer />
    </div>
  );
};

export default Root;