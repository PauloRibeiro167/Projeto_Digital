import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@context/auth';
import CartProvider from '@context/cartcontext';
import ErrorBoundary from '@components/Error/ErrorBoundary.jsx';
import { ErrorProvider } from '@context/ErrorContext';
import RoutesConfig from '@components/routes/RoutesConfig.jsx';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RoutesConfig />
      </CartProvider>
    </AuthProvider>
  );
};

const AppWrapper = () => (
  <Router>
    <ErrorProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ErrorProvider>
  </Router>
);

export default AppWrapper;