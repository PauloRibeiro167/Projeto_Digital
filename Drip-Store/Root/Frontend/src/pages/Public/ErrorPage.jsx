import React, { useState } from 'react';
import ConsoleErrorLog from '@components/Error/ConsoleErrorLog';
import { Button, Alert } from 'react-bootstrap';

const ErrorPage = () => {
  const [logs, setLogs] = useState([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const analyzeErrors = () => {
    // Script de tratamento de erros
    const analysis = logs.map((log, index) => {
      if (log.includes('Network Error')) {
        return `Erro de Rede: Verifique sua conexão com a internet ou se o servidor está acessível.\n\nDetalhes do erro:\n${log}`;
      }
      if (log.includes('ERR_CONNECTION_REFUSED')) {
        return `Conexão Recusada: O servidor pode estar offline ou a URL está incorreta.\n\nDetalhes do erro:\n${log}`;
      }
      if (log.includes('SyntaxError')) {
        return `Erro de Sintaxe: Verifique a sintaxe do seu código. Pode haver um erro de digitação ou um caractere inesperado.\n\nDetalhes do erro:\n${log}`;
      }
      if (log.includes('ReferenceError')) {
        return `Erro de Referência: Verifique se você está tentando acessar uma variável que não foi definida.\n\nDetalhes do erro:\n${log}`;
      }
      return `Erro Desconhecido: Consulte os detalhes do erro abaixo.\n\nDetalhes do erro:\n${log}`;
    });

    setLogs(analysis);
    setShowAnalysis(true);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <ConsoleErrorLog logs={logs} setLogs={setLogs} />
      <Button variant="primary" onClick={analyzeErrors} className="m-2">
        Analisar Erros
      </Button>
      {showAnalysis && (
        <div className="mt-4">
          {logs.map((log, index) => (
            <Alert key={index} variant="info">
              {log}
            </Alert>
          ))}
        </div>
      )}
    </div>
  );
};

export default ErrorPage;