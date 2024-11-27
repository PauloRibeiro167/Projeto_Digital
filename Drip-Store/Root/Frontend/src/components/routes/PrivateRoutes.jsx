import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@context/auth';

const PrivateRoute = ({ element }) => {
  const { user, isAuthenticated } = useAuth();
  console.log('Verificando usuário no PrivateRoute:', user);

  if (!isAuthenticated) {
    console.log('Usuário não autenticado, redirecionando para login');
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;