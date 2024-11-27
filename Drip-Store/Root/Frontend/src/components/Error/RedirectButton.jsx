import React from 'react';
import ErrorFallback from '../../components/Error/ErrorFallback.jsx';
import '@styles/error/RedirectButton.css';

const ErrorPage = () => {
  return (
    <ErrorFallback
      error={{ message: 'Erro ao carregar dados' }}
      resetErrorBoundary={() => window.location.reload()}
    />
  );
};

export default ErrorPage;