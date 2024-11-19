import '@styles/navbar/navbar1.css';
import { Link } from 'react-router-dom';
import logoDrip from '@images/logo-header.png';
import { CartContext } from '@context/cartcontext';
import React, { useState, useContext } from 'react';
import Seachbar from '@components/seachbar/seachbar';
import { BtSecondary } from '@components/button/Buttons';
import ToggleTheme from '@components/button/toggletheme';
import CustomOffcanvas from '@components/cart/custonoffcanvas';
import { Navbar, Nav, Container, Badge, Row, Col, Button, Dropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Navbar expand="sm" className="custom-navbar d-flex d-md-none">
          <Container fluid className="navbar-container">
            <button onClick={() => setShowDropdown(true)} className="button  border-0 btn-scale">
              <i className="bi bi-list fs-3 text-dark"></i>
            </button>

                  {/* Logo centralizado */}
                  <Navbar.Brand as={Link} to="/" className="mx-auto">
                    <img src={logoDrip} alt="Digital Store" className="logo-image" />
                  </Navbar.Brand>

                  <Nav.Link onClick={handleShow} className="nav-link position-relative me-5">
                    <i className="bi bi-cart custom-cart-icon"></i>
                    {Array.isArray(cartItems) && cartItems.length > 0 && (
                      <Badge pill bg="danger" className="cart-badge">
                        {cartItems.length}
                      </Badge>
                    )}
                  </Nav.Link>
                </Container>
              <CustomOffcanvas show={showDropdown} handleClose={() => setShowDropdown(false)} title="Menu">
                <div className="text-center mb-3">
                  <img src={logoDrip} alt="Digital Store" className="logo-image" />
                </div>
                <Dropdown.Menu show className="menu-items">
                  <Dropdown.Item as={Link} to="/home">Home</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/produtos">Produtos</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/categorias">Categorias</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/meus-pedidos">Meus Pedidos</Dropdown.Item>
                </Dropdown.Menu>
                <div className="d-flex justify-content-center mt-3">
                  <ToggleTheme />
                </div>
              </CustomOffcanvas>
            </Navbar>





          {/* Navbar para dispositivos médios e grandes (>= md) */}
          <Navbar expand="md" className="custom-navbar d-none d-md-flex">
            <Container fluid className="navbar-container">
              <Navbar.Toggle aria-controls="basic-navbar-nav-lg" />
              <Navbar.Collapse id="basic-navbar-nav-lg" className="navbar-collapse justify-content-between">
                <Row className="w-100">
                  <Col md={3} className="d-flex justify-content-center align-items-center">
                    <Navbar.Brand as={Link} to="/" className="navbar-brand mx-0">
                      <img src={logoDrip} alt="Digital Store" />
                    </Navbar.Brand>
                  </Col>
                  <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Seachbar className="searchbar mx-auto" />
                  </Col>
                  <Col md={2} className="d-flex justify-content-center align-items-center">
                    <ToggleTheme />
                  </Col>
                  <Col md={1} className="d-flex justify-content-center align-items-center">
                    <Nav.Link onClick={handleShow} className="nav-link position-relative">
                      <i className="bi bi-cart custom-cart-icon"></i>
                      {Array.isArray(cartItems) && cartItems.length > 0 && (
                        <Badge pill bg="danger" className="cart-badge">
                          {cartItems.length}
                        </Badge>
                      )}
                    </Nav.Link>
                  </Col>
                </Row>
              </Navbar.Collapse>
            </Container>
          </Navbar>

      <CustomOffcanvas show={show} handleClose={handleClose} title="Carrinho de Compras">
        {Array.isArray(cartItems) && cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {Array.isArray(cartItems) && cartItems.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </CustomOffcanvas>
    </>
  );
};

export default CustomNavbar;