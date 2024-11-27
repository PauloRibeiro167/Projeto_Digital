import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import '@styles/pages/ProductsViewPage.css';

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <Container fluid className="background p-5 py-5">
      <div className="d-flex justify-content-between mb-3">
        <h5 className='text-color ms-5'>Produtos Relacionados</h5>
        <LinkContainer to="/Show_products">
          <Button variant="primary" className="me-5 fs-6">
            Ver todos <i className="bi bi-arrow-right fs-6"></i>
          </Button>
        </LinkContainer>
      </div>
      <Row className="w-100 d-flex justify-content-start scroll-container">
        {relatedProducts.slice(0, 5).map((relatedProduct, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="scroll-item">
            <Link to={`/Show_products/${relatedProduct.id}`} className="text-decoration-none">
              <Card className="h-100 related-product-card">
                <Card.Img variant="top" src={relatedProduct.imagem_url || "/assets/img/product-thumb-5.jpeg"} alt={`Produto ${index + 1}`} className='card-color' />
                <Card.Body className="text-center">
                  <Card.Title className='text-color fs-6 mt-2'>{relatedProduct.nome}</Card.Title>
                  <Card.Text>
                    <del className="text-color text-secondary">R$ {relatedProduct.preco_original}</del>{" "}
                    <span className="text-danger fw-bold">R$ {relatedProduct.preco_desconto}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedProducts;