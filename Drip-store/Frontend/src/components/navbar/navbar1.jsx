import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@styles/navbar/navbar1.css';
import logo from '@images/logo-header.svg';
import { BtPrymary } from '@components/button/Buttons';
import Seachbar from '@components/seachbar/seachbar';
import CustomOffcanvas from '@components/cart/custonoffcanvas';
import { CartContext } from '@context/cartcontext';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="#home" className="text-dark text-center" style={{ backgroundColor: '#fffff' }}>
            <img src={logo} alt="Digital Store" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-around'>
            <Seachbar className="w-75" />
            <Nav className="ml-auto justify-content-around" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Nav.Link as={Link} to="/login" className="text-dark ms-2">
                <BtPrymary>Cadastre-se / Entrar</BtPrymary>
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="text-dark position-relative">
                <i className="bi bi-cart fs-3 custom-cart-icon" style={{ color: '#f6aa1c' }}></i>
                {Array.isArray(cartItems) && cartItems.length > 0 && (
                  <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    {cartItems.length}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Navbar bg="light" variant="dark" expand="lg" className="w-100">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav-2" />
          <Navbar.Collapse id="basic-navbar-nav-2">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home" className="text-dark">Home</Nav.Link>
              <Nav.Link as={Link} to="/produtos" className="text-dark">Produtos</Nav.Link>
              <Nav.Link as={Link} to="/categorias" className="text-dark">Categorias</Nav.Link>
              <Nav.Link as={Link} to="/meus-pedidos" className="text-dark">Meus Pedidos</Nav.Link>
            </Nav>
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