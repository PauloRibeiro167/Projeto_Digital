// src/pwa/App.jsx
import { useState, useEffect } from 'react';
import reactLogo from '../assets/images/react.svg';
import viteLogo from '/vite.svg';
import '@styles/App.css';
import { fetchData } from '../services/api';
import { handlePromise } from '../utils/helpers';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PublicPage from './PublicPage';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';
import { useAuth } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && user.role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

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
    <Router>
      <Switch>
        <Route path="/public" component={PublicPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/admin" component={AdminPage} />
        <Redirect from="/" to="/public" />
      </Switch>
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
          Edit <code>src/pwa/App.jsx</code> and save to test HMR
        </p>
      </div>
      {error ? <p>{error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  );
};

export default App;