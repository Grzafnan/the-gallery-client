import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer/Footer';
import Header from '../components/Pages/Shared/Header/Header';

const Main = () => {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 })
  }, [pathname])


  return (
    <div>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;