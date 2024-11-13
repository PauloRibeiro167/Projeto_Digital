import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logofooter from '@images/logo-footer.svg';
import facebookF from '@images/facebookF.svg';
import instagramF from '@images/instagramF.svg';
import twitter from '@images/twitter.svg';
import '@styles/footer/footer1.css';

const Footer1 = () => {
  return (
    <footer className="bg-dark  text-white p-5 text-start">
      <Container>
        <Row>

        <Col xs={12} md={3} className='bg-dark text-white p-3 text-start'>
            <img src={logofooter} alt="Logo Footer" className="d-flex mb-3 w-75 w-sm-50" />
            <p className='ms-3 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className="social-media d-flex justify-content-start mb-5 mt-5">
              <img src={facebookF} alt='Nosso Facebook' className="social-icon mx-2" />
              <img src={instagramF} alt='Nosso Instagram' className="social-icon mx-2" />
              <img src={twitter} alt='Nosso Twitter' className="social-icon mx-2" />
            </div>
          </Col> 

          <Col xs={6} md={3} className='bg-dark text-white p-3 mt-2 text-start'>
          <h4 className='text-center mb-5'>Informações</h4>
            <div className='d-flex justify-content-center'>
              <ul className="list-unstyled ms-3">
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe conosco</li>
                <li>Meus Pedidos</li>
              </ul>
              </div>
          </Col>

          <Col xs={6} md={3} className='bg-dark text-white p-3 mt-2 text-start'>
            <h4 className='text-center mb-5'>Categorias</h4>
              <div className='d-flex justify-content-center'>
              <ul className="list-unstyled ms-3 text-start">
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
              </div>
            </Col>

            <Col xs={12} md={3} className='bg-dark text-white p-3 mt-2 text-start'>
              <h4 className='text-center mb-5'>Contatos</h4>
              <ul className="list-unstyled ms-3">
                <a href = 'https://www.google.com/maps?q=Av.+Santos+Dumont,+1510+-+10%C2%BA+Andar+-+Aldeota,+Fortaleza+-+CE,+60165-000' target = '_blank' rel="noopener noreferrer">
                  Av. Santos Dumont, 1510   - 10° Andar - Aldeota, Fortaleza - CE, 60165-000</a>
                <li>Telefone: (85) 1234-5678</li>
              </ul>
            </Col>
          <hr/>
          <p className='text-center'>@ Digital college </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer1;