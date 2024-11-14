import '@styles/navbar/navbar1.css';
import { Link } from 'react-router-dom';
import logoDrip from '@images/logo-header.png';
import { CartContext } from '@context/cartcontext';
import React, { useState, useContext } from 'react';
import Seachbar from '@components/seachbar/seachbar';
import { BtPrymary } from '@components/button/Buttons';
import ToggleTheme from '@components/button/toggletheme';
import CustomOffcanvas from '@components/cart/custonoffcanvas';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Navbar expand="lg" className="custom-navbar">
          <Container fluid className="navbar-container">
            <Navbar.Brand href="#home" className="navbar-brand mx-auto ms-5">
              <img src={logoDrip} alt="Digital Store" className='--image-logo' style={{width: "70%"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse justify-content-center me-5">
              <Seachbar className="searchbar mx-auto" style={{width: "40%"}} />
            </Navbar.Collapse>
              <Nav className="ml-auto nav-items">
                <ToggleTheme/>
              </Nav>
              <Nav className="ml-auto nav-items">
                <Nav.Link as={Link} to="/login" className="nav-link">
                  <BtPrymary>Cadastre-se/Entrar</BtPrymary>
                </Nav.Link>
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
      
        <Navbar expand="lg" className="custom-navbar ms-5">
          <Container fluid className="navbar-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav-2 te" />
            <Navbar.Collapse id="basic-navbar-nav-2" className="navbar-collapse te">
              <Nav className="nav-items justify-content-start ms-5">
                <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/produtos" className="nav-link">Produtos</Nav.Link>
                <Nav.Link as={Link} to="/categorias" className="nav-link">Categorias</Nav.Link>
                <Nav.Link as={Link} to="/meus-pedidos" className="nav-link">Meus Pedidos</Nav.Link>
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