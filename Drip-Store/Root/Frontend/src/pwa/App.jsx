import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@styles/pwa/App.css';
import '@styles/themes/dark-theme.css';
import '@styles/themes/light-theme.css';
import { fetchData } from '../services/api';
import { handlePromise } from '../utils/helpers';
import { AuthProvider } from '../context/auth';
import CartProvider from '@context/cartcontext';
import ErrorBoundary from '@components/Error/ErrorBoundary.jsx';
import { ErrorProvider } from '../context/ErrorContext';
import RoutesConfig from '@components/routes/RoutesConfig.jsx';

const App = () => {
  useEffect(() => {
    async function getData() {
      const [err] = await handlePromise(fetchData());
      if (err) {
        console.error('Erro no getData:', err);
      }
    }

    getData();
  }, []);

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