// src/components/section/colections/section-colections.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@styles/section/colections/section-colections.css';
import bone from '@images/section/categorias/bone.svg';
import calca from '@images/section/categorias/calca.svg';
import camiseta from '@images/section/categorias/camiseta.svg';
import fonesDeOuvido from '@images/section/categorias/fones.svg';
import tenis from '@images/section/categorias/tenis.svg';
export { bone, calca, camiseta, fonesDeOuvido, tenis };

const SectionColections = () => {
  return (
    <Container className='section-colections text-center'>
      <h3>Coleções em destaque</h3>
      <Row className="justify-content-center">
        <Col md={2} className="mb-4">
          <Card className="bg-transparent border-0">
            <Card.Img src={camiseta} alt="Camiseta" />
            <Card.Body>
              <Card.Text>Camiseta</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mb-4">
          <Card className="bg-transparent border-0">
            <Card.Img src={calca} alt="Calça" />
            <Card.Body>
              <Card.Text>Calça</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mb-4">
          <Card className="bg-transparent border-0">
            <Card.Img src={bone} alt="Boné" />
            <Card.Body>
              <Card.Text>Boné</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mb-4">
          <Card className="bg-transparent border-0">
            <Card.Img src={fonesDeOuvido} alt="Fones de Ouvido" />
            <Card.Body>
              <Card.Text>Headphones</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mb-4">
          <Card className="bg-transparent border-0">
            <Card.Img src={tenis} alt="Tênis" />
            <Card.Body>
              <Card.Text>Tênis</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionColections;