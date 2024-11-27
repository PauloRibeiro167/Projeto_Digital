// src/components/ErrorList.jsx
import React, { useContext } from 'react';
import { ErrorContext } from '@context/ErrorContext';

const ErrorList = () => {
  const { errors } = useContext(ErrorContext);

  return (
    <div>
      <h2>Erros Capturados:</h2>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>
            <p>{error.error.toString()}</p>
            <pre>{error.errorInfo.componentStack}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;