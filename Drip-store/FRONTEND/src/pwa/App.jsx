// src/pwa/App.jsx
import { useState, useEffect } from 'react';
import reactLogo from '../assets/images/react.svg'; // Corrigido o caminho do logo do React
import viteLogo from '/vite.svg';
import '@styles/App.css';
import { fetchData } from '../services/api';
import { handlePromise } from '../utils/helpers';

function App() {
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
    <>
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
    </>
  );
}

export default App;