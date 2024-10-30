// src/components/ErrorBoundary/ErrorFallback.jsx
import React from 'react';

function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Erro 500: Algo deu errado.</p>
      <button onClick={re}>Tentar novamente</button>
    </div>
  );
}

export default ErrorFallback;