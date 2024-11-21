import '@styles/navbar/navbar1.css';
import { Link } from 'react-router-dom';
import logoDrip from '@images/logo-header.png';
import { CartContext } from '@context/cartcontext';
import React, { useState, useContext } from 'react';
import Seachbar from '@components/seachbar/seachbar';
import ToggleTheme from '@components/button/toggletheme';
import { Navbar, Nav, Container, Badge, Row, Col, Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { paths } from '@utils/paths';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDropdownClose = () => setShowDropdown(false);
  const handleDropdownShow = () => setShowDropdown(true);

  return (
    <>
      <Navbar expand="sm" className="custom-navbar d-flex d-md-none">
        <Container fluid className="navbar-container">
          <button onClick={handleDropdownShow} className="button border-0 btn-scale p-0 ms-2">
            <i className="bi bi-list fs-3 menu-icon"></i>
          </button>
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src={logoDrip} alt="Digital Store" className="logo-image" />
          </Navbar.Brand>
          <Nav.Link onClick={handleShow} className="nav-link position-relative me-2">
            <i className="bi bi-cart custom-cart-icon"></i>
            {Array.isArray(cartItems) && cartItems.length > 0 && (
              <Badge pill bg="danger" className="cart-badge">
                {cartItems.length}
              </Badge>
            )}
          </Nav.Link>
        </Container>
        <Offcanvas show={showDropdown} onHide={handleDropdownClose} placement="start" className="menu-off-canvas" style={{ width: '50%' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={logoDrip} alt="Digital Store" className="logo-image w-100 me-2" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column">
            <div className="menu-itens text-center">
              <Dropdown.Item as={Link} to="/produtos">Produtos</Dropdown.Item>
              <Dropdown.Item as={Link} to="/categorias">Categorias</Dropdown.Item>
              <Dropdown.Item as={Link} to="/meus-pedidos">Meus Pedidos</Dropdown.Item>
            </div>
            <div className="d-flex justify-content-center menu-itens mt-auto">
              <ToggleTheme />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
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
      <Offcanvas show={show} onHide={handleClose} placement="end" className="menu-off-canvas w-50">
        <Offcanvas.Header className="d-flex justify-content-between align-items-center">
          <Offcanvas.Title className="d-flex align-items-center">
            <i className="bi bi-cart custom-cart-icon fs-5 me-2"></i>
          </Offcanvas.Title>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <div>
            {Array.isArray(cartItems) && cartItems.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <ul>
                {Array.isArray(cartItems) && cartItems.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="d-flex justify-content-center menu-itens mt-auto">
            <Link to={paths.login} className="btn btn-primary">
              Login
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;