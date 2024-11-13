import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@styles/navbar/navbar1.css';
import { BtPrymary } from '@components/button/Buttons';
import Seachbar from '@components/seachbar/seachbar';
import ToggleTheme from '@components/button/toggletheme';
import CustomOffcanvas from '@components/cart/custonoffcanvas';
import { CartContext } from '@context/cartcontext';

const CustomNbar = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-brand mx-auto ms-5">
            <img alt="Digital Store" className='--image-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse justify-content-center me-5">
            <Seachbar className="searchbar mx-auto" />
          </Navbar.Collapse>
            <Nav className="ml-auto nav-items">
              <ToggleTheme/>
            </Nav>
            <Nav className="ml-auto nav-items">
              <Nav.Link onClick={handleShow} className="nav-link position-relative me-5">
                <i className="bi bi-cart custom-cart-icon"></i>
                {Array.isArray(cartItems) && cartItems.length > 0 && (
                  <Badge pill bg="danger" className="cart-badge">
                    {cartItems.length}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNbar;