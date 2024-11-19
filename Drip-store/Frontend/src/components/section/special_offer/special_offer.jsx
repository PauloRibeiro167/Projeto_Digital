import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@styles/section/special_offer/special_offer.css';
import specialOfferImage from '@images/Laye 1.png'; 

const SpecialOffer = () => {
  return (
    <section className="text-center py-5 "style={{ background: "rgba(255, 255, 255, 1)" }}>
      <Container className="d-flex align-items-center justify-content-center text-center text-md-start flex-column flex-md-row">
        <div className="esfera"></div>
        <section className="order-md-1">
          <img 
            src={specialOfferImage} 
            alt="Tênis Nike" 
            className="img-fluid" 
            style={{ position: 'relative', zIndex: 1 }} 
          />
        </section>

        <section className="order-md-2 py-5">
          <div>
            <h6 className=" ">Oferta especial</h6>
            <h1 className="special-text">
              Air Jordan edição de colecionador
            </h1>
            <p className="text-wrap lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <Button variant="danger">Ver Ofertas</Button>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default SpecialOffer;
