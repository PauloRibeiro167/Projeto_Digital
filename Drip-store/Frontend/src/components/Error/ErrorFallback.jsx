// src/components/Error/ErrorFallback.jsx
import React from 'react';
import RedirectButton from './RedirectButton';
import ConsoleErrorLog from './ConsoleErrorLog';
import { Alert, Button } from 'react-bootstrap';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const errorMessage = error?.message || 'Erro desconhecido';

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <ConsoleErrorLog />
      <Alert variant="danger" className="text-center">
        <h1>Ocorreu um erro</h1>
        <p><strong>Código do erro:</strong> {errorMessage}</p>
        <p>Ocorreu um erro ao carregar os dados da aplicação. Por favor, tente novamente mais tarde.</p>
        <Button onClick={resetErrorBoundary} variant="primary" className="m-2">Recarregar Página</Button>
        <RedirectButton />
      </Alert>
    </div>
  );
};

export default ErrorFallback;