// src/components/cart/CustomOffcanvas.jsx
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/auth';
import { paths } from '@utils/paths'; 

const CustomOffcanvas = ({ show, handleClose, title, children, footerLink}) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate(footerLink);
    } else {
      navigate(paths.login);
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="menu-off-canvas w-50">
      <Offcanvas.Header className="d-flex justify-content-between align-items-center">
        <Offcanvas.Title className="d-flex align-items-end ms-2">
          {title}
        </Offcanvas.Title>
        <button type="button" className="btn-close ms-auto me-2" aria-label="Close" onClick={handleClose} style={{ filter: 'invert(1)' }}></button>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        {children}
        <div className="d-flex justify-content-center menu-itens mt-auto">
          <Button variant="success" onClick={handleCheckout}>
            {isLoggedIn ? 'Finalizar Compra' : 'Login'}
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;