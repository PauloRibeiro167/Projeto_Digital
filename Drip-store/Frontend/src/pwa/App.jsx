import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@styles/pwa/App.css';
import '@styles/themes/dark-theme.css';
import '@styles/themes/light-theme.css';
import { fetchData } from '../services/api';
import { handlePromise } from '../utils/helpers';
import HomePage from '../pages/Public/HomePage';
import PublicPage from '../pages/Public/PublicPage';
import AdminPage from '../pages/Admin/AdminPage';
import AuthPage from '../pages/AuthPages.jsx';
import CadastroPage from '../pages/Public/Cadastro.jsx';
import { AuthProvider } from '../context/auth';
import CartProvider from '@context/cartcontext';
import PrivateRoute from '../components/routes/PrivateRoutes.jsx';
import { paths } from '../utils/paths';
import ErrorBoundary from '../components/Error/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentPage from '../pages/Public/PaymentPage.jsx';

const App = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const [err, result] = await handlePromise(fetchData());
      if (err) {
        setError('Erro ao buscar dados');
        console.error('Erro no getData:', err);
      }
    }

    getData();
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path={paths.home} element={<HomePage />} />
              <Route path={paths.public} element={<PublicPage />} />
              <Route path={paths.login} element={<AuthPage />} />
              <Route path={paths.payment} element={<PaymentPage />} />
              <Route path={paths.admin} element={<PrivateRoute element={<AdminPage />} />} />
              <Route path={paths.cadastro} element={<CadastroPage />} />
            </Routes>
            {error && <p>{error}</p>}
          </Router>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;