import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import '@styles/navbar/navbar1.css';
import { CartContext } from '@context/cartcontext';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-brand mx-auto ms-5">
            <img alt="Digital Store" className='--image-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse justify-content-center me-5">
          </Navbar.Collapse>
            <Nav className="ml-auto nav-items">
            </Nav>

          </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;