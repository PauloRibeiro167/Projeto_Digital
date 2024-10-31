// src/pwa/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/index.css';
import App from '../pwa/App.jsx';
import ErrorBoundary from '../components/Error/ErrorBoundary.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);