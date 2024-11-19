// src/components/section/colections/section-colections.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "@styles/section/colections/section-colections.css";
import bone from "@images/section/categorias/bone.svg";
import calca from "@images/section/categorias/calca.svg";
import camiseta from "@images/section/categorias/camiseta.svg";
import fonesDeOuvido from "@images/section/categorias/fones.svg";
import tenis from "@images/section/categorias/tenis.svg";

const SectionColections = () => {
  const collections = [
    { id: 1, title: "Camisetas", image: camiseta },
    { id: 2, title: "Calças", image: calca },
    { id: 3, title: "Bonés", image: bone },
    { id: 4, title: "Headphones", image: fonesDeOuvido },
    { id: 5, title: "Tênis", image: tenis },
  ];

  return (
    <section className="py-5" style={{ background: "rgba(249, 248, 254, 1)" }}>
      <Container>
        <h3 className="mb-4 text-center">Coleções em Destaque</h3>
        <Row className="m-5 justify-content-center">
          {collections.map((collection) => (
            <Col xs={6} md={2} key={collection.id}>
              <Card className="border-0 text-center">
                <div className="image-container-product">
                  <Card.Img
                    src={collection.image}
                    alt={collection.title}
                    className="card-img-top-product"
                  />
                </div>
                <Card.Body>
                  <h5 className="card-title mt-2">{collection.title}</h5>
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
