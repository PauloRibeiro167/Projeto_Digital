import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@styles/section/categorias/section-categorias.css';
import collection1 from '@images/collection-1.png';
import collection2 from '@images/collection-2.png';
import collection3 from '@images/collection-3.png';

const SectionCategorias = () => {
  return (
    <Container className='section-categorias text'>
      <h4 className='text-start text-color'>Coleções em destaque</h4>
      <Row>
        <Col md={4}>
          <Card className="bg-transparent border-0 position-relative">
            <Card.Img src={collection1} alt="Novo drop Supreme" />
            <Button variant="success" className="position-absolute top-0 start-0 m-5">30% Off</Button>
            <Button variant="primary" className="position-absolute bottom-0 start-50 translate-middle-x mb-5">Comprar</Button>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0 position-relative">
            <Card.Img src={collection2} alt="Coleção adiddas" />
            <Button variant="success" className="position-absolute top-0 start-0 m-5">30% Off</Button>
            <Button variant="primary" className="position-absolute bottom-0 start-50 translate-middle-x mb-5">Comprar</Button>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0 position-relative">
            <Card.Img src={collection3} alt="Coleção 2" />
            <Button variant="success" className="position-absolute top-0 start-0 m-5">30% Off</Button>
            <Button variant="primary" className="position-absolute bottom-0 start-50 translate-middle-x mb-5">Comprar</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionCategorias;