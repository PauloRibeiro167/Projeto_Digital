import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '@styles/section/special_offer/special_offer.css';
import specialOfferImage from '@images/Laye 1.png'; 

const SpecialOffer = () => {
  return (
    <section className="text-center">
      <div className='w-100 h-100 py-5 p-4 color'>
      <Container className="d-flex align-items-center justify-content-center text-center text-md-start flex-column flex-md-row mt-5 color">
        <div className="esfera mt-5"></div>
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
      </div>
    </section>
  );
};

export default SpecialOffer;