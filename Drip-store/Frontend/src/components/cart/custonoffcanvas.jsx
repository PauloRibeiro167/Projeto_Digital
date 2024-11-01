// src/components/cart/custonoffcanvas.jsx
import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const CustomOffcanvas = ({ show, handleClose, title, children }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {children}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;