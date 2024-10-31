import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logofooter from '@images/logo-footer.svg';

const Footer1 = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md={3}>
            <img src={logofooter} alt="Logo Footer" className="mb-2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </Col>
          <Col md={3}>
            <h6>Informações</h6>
            <ul className="list-unstyled">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Categorias</h6>
            <ul className="list-unstyled">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Contatos</h6>
            <ul className="list-unstyled">
              <li>Email: contato@dripstore.com</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Endereço: Rua Exemplo, 123</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer1;