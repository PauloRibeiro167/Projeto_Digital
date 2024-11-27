// navbarMobile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Badge, Offcanvas, Dropdown } from 'react-bootstrap';
import ToggleTheme from '@components/button/toggletheme';
import logoDrip from '@images/logo-header.png';

const NavbarMobile = ({ showDropdown, handleDropdownShow, handleDropdownClose, show, handleShow, handleClose, filteredCartItems }) => {
  return (
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
          {filteredCartItems.length > 0 && (
            <Badge pill bg="danger" className="cart-badge">
              {filteredCartItems.length}
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
            <ToggleTheme/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavbarMobile;