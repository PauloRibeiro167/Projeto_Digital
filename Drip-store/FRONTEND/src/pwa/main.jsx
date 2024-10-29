// src/pwa/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import '@styles/index.css';
import App from '../pwa/App.jsx';
import ErrorBoundary from '..//components/Error/ErrorBoundary.jsx';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN', // Substitua pelo seu DSN do Sentry
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

createRoot(document.getElementById('root')).render(


      <App />


);