// src/components/cart/CustomOffcanvas.jsx
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomOffcanvas = ({ show, handleClose, title, children, footerLink, footerText }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="menu-off-canvas w-50">
      <Offcanvas.Header closeButton className="d-flex justify-content-between align-items-center">
        <Offcanvas.Title className="d-flex align-items-center">
          {title}
        </Offcanvas.Title>
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        {children}
        <div className="d-flex justify-content-center menu-itens mt-auto">
          <Link to={footerLink} className="btn btn-primary">
            {footerText}
          </Link>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;