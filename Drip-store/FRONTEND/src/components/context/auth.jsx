// src/components/context/auth.jsx
import React, { createContext, useContext, useState } from 'react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);

    Sentry.init({
      dsn: 'https://o4508212142997504.ingest.us.sentry.io/api/4508212145553408/security/?sentry_key=f9f8ba81e74ef6c7be8676373267020f',
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};