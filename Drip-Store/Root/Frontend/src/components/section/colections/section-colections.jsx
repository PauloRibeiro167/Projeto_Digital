// src/components/section/colections/section-colections.jsx
import React from "react";
import { Container, Card } from "react-bootstrap";
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
    <section className="py-5 section-colections">
      <Container className="d-flex justify-content-center"/>
        <h3 className="mb-4 text-center text-color">Categorias</h3>
      <Container className="d-flex justify-content-center">
        <div className="scroll-container">
          {collections.map((collection) => (
            <div className="scroll-item" key={collection.id}>
              <Card className="border-0 text-center">
                <div className="image-container-product">
                  <Card.Img
                    src={collection.image}
                    alt={collection.title}
                    className="card-category"
                  />
                </div>
                <Card.Body>
                  <h5 className="card-title mt-2 text-color">{collection.title}</h5>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionColections;