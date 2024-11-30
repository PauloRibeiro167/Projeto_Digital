import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/login', userData);
      setIsAuthenticated(true);
      setUser(userData);
      navigate('/user/show');
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