import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@styles/special_offer/special_offer.css';
import specialOfferImage from '@images/special_offer.png'; 

const SpecialOffer = () => {
  const specialOffer = {
    title: 'Oferta Especial',
    description: 'Descrição da oferta especial',
    imageUrl: specialOfferImage,
    discount: '50% Off'
  };

  return (
    <Container className='special-offer'>
      <h2 className='text-center text-color'>Oferta Especial</h2>
      <Row className='justify-content-center'>
        <Col md={6} className='mb-4'>
          <Card>
            <Card.Img variant="top" src={specialOffer.imageUrl} alt={specialOffer.title} />
            <Card.Body>
              <Card.Title>{specialOffer.title}</Card.Title>
              <Card.Text>{specialOffer.description}</Card.Text>
              <Button variant="success">{specialOffer.discount}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SpecialOffer;