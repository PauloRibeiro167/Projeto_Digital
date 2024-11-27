// src/context/ErrorContext.jsx
import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const addError = (error) => {
    setErrors((prevErrors) => [...prevErrors, error]);
  };

  return (
    <ErrorContext.Provider value={{ errors, addError }}>
      {children}
    </ErrorContext.Provider>
  );
};