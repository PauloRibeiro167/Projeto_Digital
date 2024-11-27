import React, { createContext, useContext, useState } from 'react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/login', userData);
      setIsAuthenticated(true);
      setUser(userData);

      Sentry.init({
        dsn: 'https://f9f8ba81e74ef6c7be8676373267020f@o4508212142997504.ingest.sentry.io/4508212145553408',
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
      });

      console.log('Login bem-sucedido:', response.data.message);
      console.log('Estado de autenticação atualizado:', { isAuthenticated: true, user: userData });
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    console.log('Usuário deslogado');
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