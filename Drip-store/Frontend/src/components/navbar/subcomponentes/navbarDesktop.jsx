// navbarDesktop.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col, Badge, Nav, Dropdown } from 'react-bootstrap';
import Seachbar from '@components/seachbar/seachbar';
import ToggleTheme from '@components/button/toggletheme';
import logoDrip from '@images/logo-header.png';
import { paths } from '@utils/paths';
import '@styles/navbar/navbarDesktop.css';

const NavbarDesktop = ({ handleShow, filteredCartItems, isLoggedIn }) => {
  return (
    <Navbar expand="md" className="custom-navbar d-none d-md-flex">
      <Container fluid className="navbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav-lg" />
        <Navbar.Collapse id="basic-navbar-nav-lg" className="navbar-collapse">
          <Row className="w-100">
            <Col md={3} className="d-flex align-items-center">
              <Navbar.Brand as={Link} to="/" className="navbar-brand mx-0">
                <img src={logoDrip} alt="Digital Store" />
              </Navbar.Brand>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <Seachbar className="searchbar mx-auto" />
            </Col>
            <Col md={3} className="d-flex align-items-center justify-content-end">
              <ToggleTheme />
              {isLoggedIn ? (
                <Dropdown className="ms-3 drop">
                  <Dropdown.Toggle as="span" id="dropdown-basic" className="d-inline-flex align-items-center p-0 dropdown-toggle-custom">
                    <i className="bi bi-person-fill text-success fs-4"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-custom">
                    <Dropdown.Item as={Link} to={paths.userProfile} className="text-center">Minha Conta</Dropdown.Item>
                    <Dropdown.Item as={Link} to={paths.logout} className="text-center">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Dropdown className="ms-3">
                  <Dropdown.Toggle as="span" id="dropdown-basic" className="d-inline-flex align-items-center p-0 dropdown-toggle-custom">
                    <i className="bi bi-person-exclamation text-danger fs-4"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-custom">
                    <Dropdown.Item as={Link} to={paths.login} className="text-center p-1">Login</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              <Nav.Link onClick={handleShow} className="nav-link position-relative ms-3">
                <i className="bi bi-cart custom-cart-icon"></i>
                {filteredCartItems.length > 0 && (
                  <Badge pill bg="danger" className="cart-badge">
                    {filteredCartItems.length}
                  </Badge>
                )}
              </Nav.Link>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarDesktop;