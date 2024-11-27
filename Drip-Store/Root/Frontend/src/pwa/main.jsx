// src/pwa/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/pwa/App.css';
import App from './App.jsx';
import ErrorBoundary from '@components/Error/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);