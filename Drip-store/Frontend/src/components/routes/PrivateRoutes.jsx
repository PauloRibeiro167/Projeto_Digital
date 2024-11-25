import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@context/auth';
import { paths } from '@utils/paths';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to={paths.login} />;
};

export default PrivateRoute;