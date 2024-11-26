// src/components/Error/ConsoleErrorLog.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';

const ConsoleErrorLog = () => {
  const [logs, setLogs] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args) => {
      const errorDetails = args.map(arg => {
        if (arg instanceof Error) {
          return `${arg.message}\n${arg.stack}`;
        }
        return arg;
      }).join(' ');

      const errorMessage = analyzeError(errorDetails);
      setLogs((prevLogs) => [...prevLogs, errorMessage]);
      originalConsoleError(...args);
      setShow(true);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  const analyzeError = (errorDetails) => {
    if (errorDetails.includes('Network Error')) {
      return `Erro de Rede: Verifique sua conexão com a internet ou se o servidor está acessível.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    if (errorDetails.includes('ERR_CONNECTION_REFUSED')) {
      return `Conexão Recusada: O servidor pode estar offline ou a URL está incorreta.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    if (errorDetails.includes('SyntaxError')) {
      return `Erro de Sintaxe: Verifique a sintaxe do seu código. Pode haver um erro de digitação ou um caractere inesperado.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    if (errorDetails.includes('TypeError')) {
      return `Erro de Tipo: Verifique se você está acessando propriedades ou métodos de um objeto que não existe ou que não é do tipo esperado.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    if (errorDetails.includes('ReferenceError')) {
      return `Erro de Referência: Verifique se você está tentando acessar uma variável que não foi definida.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    if (errorDetails.includes('IntegrationError')) {
      return `Erro de Integração: Verifique se as dependências externas estão configuradas corretamente e se os serviços estão acessíveis.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    if (errorDetails.includes('CommunicationError')) {
      return `Erro de Comunicação: Verifique se os módulos ou arquivos estão sendo importados corretamente e se os caminhos estão corretos.\n\nDetalhes do erro:\n${errorDetails}`;
    }
    return `Erro Desconhecido: Consulte os detalhes do erro abaixo.\n\nDetalhes do erro:\n${errorDetails}`;
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)} className="m-2">
        Mostrar Erros ({logs.length})
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Erros do Console ({logs.length})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {logs.map((log, index) => (
            <Alert key={index} variant="danger">
              {log}
            </Alert>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConsoleErrorLog;