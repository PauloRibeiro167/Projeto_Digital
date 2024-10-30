// src/components/PrivateRoutes.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../components/context/auth';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated && user.role === 'superadmin' ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;