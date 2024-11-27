import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import '@styles/error/ConsoleErrorLog.css';

const ConsoleErrorLog = ({ logs, setLogs }) => {
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

      setLogs((prevLogs) => [...prevLogs, errorDetails]);
      originalConsoleError(...args);
      setShow(true);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, [setLogs]);

  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)} className="m-2">
        Mostrar Erros ({logs.length})
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className="modal-dark">
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Erros do Console ({logs.length})</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {logs.map((log, index) => (
            <Alert key={index} variant="danger">
              {log}
            </Alert>
          ))}
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConsoleErrorLog;