// src/components/cart/custonoffcanvas.jsx
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomOffcanvas = ({ show, handleClose, title, children }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {children}
        <div className="mt-3">
          <Button as={Link} to="/public/payment" variant="primary" onClick={handleClose}>
            Ir para Pagamento
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;