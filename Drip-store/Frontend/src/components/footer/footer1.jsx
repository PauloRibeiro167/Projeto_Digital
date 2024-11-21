import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LogoFooter from '@images/logo-footer.svg';
import '@styles/footer/footer1.css';

const Footer1 = () => {
  return (
    <footer className="footer p-1 text-start">
      <Container>
        <Row className="footer">
          <Col xs={12} md={3} className="text-color p-3 mt-4 text-start">
            <img src={LogoFooter} alt="Digital Store" className="d-flex mb-3 w-75 w-sm-50 text-color" />
            <p className="text-color mb-1 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="text-color social-media d-flex justify-content-start mb-2 mt-4 ms-3">
              <a href="https://www.facebook.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook text-color fs-5 me-2 ms-2"></i></a>
              <a href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram text-color fs-5 me-2 ms-2"></i></a>
              <a href="https://x.com/_digitalcollege" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter text-color fs-5 me-2 ms-2"></i></a>
            </div>

          </Col>

          <Col xs={6} md={3} className="text-white p-3 mt-4 text-start">
            <h4 className="text-color text-center mb-3">Informações</h4>
            <div className="d-flex justify-content-center">
              <ul className="text-color list-unstyled">
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe conosco</li>
                <li>Meus Pedidos</li>
              </ul>
            </div>
          </Col>

          <Col xs={6} md={3} className="text-color p-3 mt-4 text-start">
            <h4 className="text-center mb-3">Categorias</h4>
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled text-start">
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={3} className="text-color p-3 mt-4 text-start">
            <h4 className="text-center mb-3">Contatos</h4>
            <ul className="list-unstyled">
              <a href="https://www.google.com/maps?q=Av.+Santos+Dumont,+1510+-+10%C2%BA+Andar+-+Aldeota,+Fortaleza+-+CE,+60165-000" target="_blank" rel="noopener noreferrer">
                Av. Santos Dumont, 1510 - 10° Andar - Aldeota, Fortaleza - CE, 60165-000
              </a>
              <li>Telefone: (85) 1234-5678</li>
            </ul>
          </Col>
          <hr />
          <p className="text-color text-center">@ 2024 Drip Store, Todos os direitos reservados para a Equipe dos que não foram imbora</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer1;