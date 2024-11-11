import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logofooter from '@images/logo-footer.svg';
import facebookF from '@images/facebookF.svg';
import instagramF from '@images/instagramF.svg';
import twitter from '@images/twitter.svg';
import '@styles/footer/footer.css';

const Footer1 = () => {
  return (
    <footer className="bg-dark  text-white p-5 text-start">
      <Container>
        <Row>
          <Col md={3} className="ColunaFooter text-start">

            <img src={logofooter} alt="Logo Footer" className="d-flex w-75" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className="social-media">
            <img src={facebookF} alt='Nosso Facebook' style={{width:'20px', height:'20px', margin: '10px'}}/>
            <img src={instagramF} alt='Nosso Instagram' style={{width:'20px', height:'20px', margin: '10px'}}/>
            <img src={twitter} alt='Nosso Twitter' style={{width:'20px', height:'20px', margin: '10px'}}/>
            </div>
            
          </Col> 
          {/* Logo aqui em baixo tem as colunas sobre informações a mais -> Mais sobre o site e a 
          categoria dos produtos*/}
          <Col md={3} className='bg-dark text-white p-3 text-start'>
          <div className=''/>
            <h6>Informaçõe</h6>
            <ul className="list-unstyled">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </Col>
          <Col md={3} className='bg-dark text-white p-3 text-start'>
            <h6>Categorias</h6>
            <ul className="list-unstyled">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </Col>
          <Col md={3} className='bg-dark text-white p-3 text-start'>
            <h6>Contatos</h6>
            <ul className="list-unstyled">
              <a href = 'https://www.google.com/maps?q=Av.+Santos+Dumont,+1510+-+10%C2%BA+Andar+-+Aldeota,+Fortaleza+-+CE,+60165-000'
              target = '_blank'
              rel="noopener noreferrer">
               Av. Santos Dumont, 1510 - 10° Andar - Aldeota, Fortaleza - CE, 60165-000</a>
              <li>Telefone: (85) 1234-5678</li>
              
            </ul>
          </Col>
         <hr/>
       </Row>
      </Container>
    </footer>
  );
};

export default Footer1;
