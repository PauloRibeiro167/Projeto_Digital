import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@styles/navbar/navbar1.css';
import logo from '@images/logo-header.png';
import { BtPrymary } from '@components/button/Buttons';
import Seachbar from '@components/seachbar/seachbar';
import CartIcon from '@components/cart/CartIcon';

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="#home" className="text-dark" style={{ backgroundColor: '#fffff', textAlign:'center' }}>
            <img src={logo} alt="Digital Store" />
          </Navbar.Brand>
          <Seachbar />
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login" className="text-dark">
              <BtPrymary>Cadastre-se / Entrar</BtPrymary>
            </Nav.Link>
            <CartIcon itemCount={5} />
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