import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import PaymentPage from '../pages/Public/PaymentPage.jsx';
import ErrorPage from '../pages/Public/ErrorPage.jsx';
import ShowProducts from '../pages/Public/ShowProducts.jsx';
import ProductViewPage from '../pages/Public/ProductViewPage.jsx';
import SuperAdmin from '../pages/Admin/SuperAdmin.jsx';
import ErrorBoundary from '../components/Error/ErrorBoundary.jsx';

const App = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const [err] = await handlePromise(fetchData());
      if (err) {
        setError('Erro ao buscar dados');
        console.error('Erro no getData:', err);
        navigate('/error');
      }
    }
  
    getData();
  }, [navigate]);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.public} element={<PublicPage />} />
            <Route path={paths.login} element={<AuthPage />} />
            <Route path={paths.payment} element={<PaymentPage />} />
            <Route path={paths.admin} element={<PrivateRoute element={<AdminPage />} />} />
            <Route path={paths.cadastro} element={<CadastroPage />} />
            <Route path={paths.show_products} element={<ShowProducts />} />
            <Route path={`${paths.show_products}/:id`} element={<ProductViewPage />} />
            <Route path={paths.super_admin} element={<PrivateRoute element={<SuperAdmin />} />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;