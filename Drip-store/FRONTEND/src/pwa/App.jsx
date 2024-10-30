// src/pwa/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import reactLogo from '../assets/images/react.svg';
import viteLogo from '/vite.svg';
import '@styles/App.css';
import { fetchData } from '../services/api';
import { handlePromise } from '../utils/helpers';
import HomePage from '../pages/Public/HomePage';
import PublicPage from '../pages/Public/PublicPage';
import AdminPage from '../pages/Admin/AdminPage';
import LoginPage from '../pages/LoginPage';
import { AuthProvider } from '../components/context/auth.jsx';
import PrivateRoute from '../components/PrivateRoutes';
import { paths } from '../utils/paths';

const App = () => {
  const [count, setCount] = useState(0);
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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.public} element={<PublicPage />} />
          <Route path={paths.login} element={<LoginPage />} />
          <PrivateRoute path={paths.admin} element={<AdminPage />} />
          <Route path="*" element={<Navigate to={paths.home} />} />
        </Routes>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        {error ? <p>{error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Router>
    </AuthProvider>
  );
};

export default App;