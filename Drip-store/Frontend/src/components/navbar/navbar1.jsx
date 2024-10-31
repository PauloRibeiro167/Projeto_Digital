// src/components/navbar/navbar1.jsx
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@styles/navbar/navbar1.css';
import logo from '@images/logo-header.svg';

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="#home" className="text-dark">
            <img src={logo} alt="Digital Store" />
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Pesquisar"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/cadastre-se" className="text-dark">Cadastre-se</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">Entrar</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-dark">Carrinho</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="dark" expand="lg" className="w-100">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home" className="text-dark">Home</Nav.Link>
            <Nav.Link as={Link} to="/produtos" className="text-dark">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/categorias" className="text-dark">Categorias</Nav.Link>
            <Nav.Link as={Link} to="/meus-pedidos" className="text-dark">Meus Pedidos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;