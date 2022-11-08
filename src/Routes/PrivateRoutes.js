import React, { useContext } from 'react';
import Loader from '../components/Pages/AddService/Utilities/Loader';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation();

  if (loading) {
    <Loader />
  }


  if (user && user?.id) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;