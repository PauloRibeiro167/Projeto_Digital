import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '@styles/navbar/navbar1.css';
import logoDrip from '@images/logo-header.png';

const CustomNbar = () => {
  return (
    <Container fluid className="navbar-container">
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home" className="navbar-brand mx-auto mx-lg-5">
          <img 
            src={logoDrip} 
            alt="Digital Store" 
            className='d-block mx-auto mx-lg-0' 
            style={{ width: "70%" }} 
          />
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export { CustomNbar };