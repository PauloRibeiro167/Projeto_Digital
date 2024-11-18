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
    <section className="py-5">
    <Container>
      <h3 className="mb-4 text-center">Coleções em Destaque</h3>
      <Row className="g-3 justify-content-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Col xs={6} md={2} key={index}>
            <Card className="border-0">
              <Card.Img
                src="https://via.placeholder.com/150"
                alt="Novo drop Supreme"
                className="card-img-top"
              />
              <Card.Body className="text-center">
                <h5 className="card-title mt-2">Camisetas</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
};


export default SectionColections;