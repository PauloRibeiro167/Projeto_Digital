// src/components/AdminNavbar.jsx
import React from 'react';
import "@styles/navbar/admin/navbar.css";
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const AdminNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/admin">
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/admin/products">
              <Nav.Link>Produtos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/orders">
              <Nav.Link>Pedidos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/users">
              <Nav.Link>Usuários</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <LinkContainer to="/admin/settings/profile">
                <NavDropdown.Item>Perfil</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/settings/security">
                <NavDropdown.Item>Segurança</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/admin/settings/logout">
                <NavDropdown.Item>Sair</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;