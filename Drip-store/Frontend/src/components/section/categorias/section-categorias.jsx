import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@styles/section/categorias/section-categorias.css';
import collection1 from '@images/section/collections/collection-1.png';
import collection2 from '@images/section/collections/collection-2.png';
import collection3 from '@images/section/collections/collection-3.png';


const collections = [
  { src: collection1, alt: "Novo drop Supreme" },
  { src: collection2, alt: "Coleção adiddas" },
  { src: collection3, alt: "Coleção 2" },
];

const renderCard = (collection, index) => (
  <Col md={4} key={index}>
    <Card className="bg-transparent border-0 position-relative">
      <Card.Img src={collection.src} alt={collection.alt} />
      <Button variant="success" className="position-absolute top-0 start-0 m-5">30% Off</Button>
      <Button variant="primary" className="position-absolute bottom-0 start-50 translate-middle-x mb-5">Comprar</Button>
    </Card>
  </Col>
);

const SectionCategorias = () => {
  return (
    <Container className='section-categorias text'>
      <h4 className='text-start text-color ms-4'>Coleções em destaque</h4>
      <Row>
        {collections.map((collection, index) => renderCard(collection, index))}
      </Row>
    </Container>
  );
}

export default SectionCategorias;