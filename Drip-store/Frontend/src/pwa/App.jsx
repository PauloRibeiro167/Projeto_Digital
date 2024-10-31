import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@styles/pwa/App.css';
import { fetchData } from '../services/api';
import { handlePromise } from '../utils/helpers';
import HomePage from '../pages/Public/HomePage';
import PublicPage from '../pages/Public/PublicPage';
import AdminPage from '../pages/Admin/AdminPage';
import LoginPage from '../pages/LoginPage';
import { AuthProvider } from '../components/context/auth.jsx';
import PrivateRoute from '../components/routes/PrivateRoutes.jsx';
import { paths } from '../utils/paths';
import ErrorBoundary from '../components/Error/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const [err, result] = await handlePromise(fetchData());
      if (err) {
        setError('Erro ao buscar dados');
        console.error('Erro no getData:', err);
      } else {
        setData(result);
      }
    }
    getData();
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.public} element={<PublicPage />} />
            <Route path={paths.login} element={<LoginPage />} />
            <Route path={paths.admin} element={<PrivateRoute element={<AdminPage />} />} />
            <Route path="*" element={<Navigate to={paths.home} />} />
          </Routes>
          {error && <p>{error}</p>}
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;