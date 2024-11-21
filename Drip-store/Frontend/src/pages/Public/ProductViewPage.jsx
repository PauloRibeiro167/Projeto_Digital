import React from 'react';
import { Container, Navbar, Nav, Badge, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoFooter from '@images/logo-footer.svg';
import productThumb from '@images/product-thumb-5.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CustomNavbar from '@components/navbar/navbar1.jsx';

const ProductViewPage = () => {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>

      <section className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/produtos">Produtos</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Ténis Nike Revolution 6 Next Nature Masculino</li>
          </ol>
        </nav>
      </section>

      <section className="container my-4">
        <Row>
          <Col md={6}>
            <img src="/assets/img/imagesliddetalhe.png" alt="Ténis Nike" className="img-fluid rounded mb-3" />
            <div className="d-flex justify-content-between">
              <img src="/assets/img/imagesliddetalhe.png" alt="Thumbnail 1" className="img-thumbnail" style={{ width: '18%' }} />
              <img src="/assets/img/imagesliddetalhe.png" alt="Thumbnail 2" className="img-thumbnail" style={{ width: '18%' }} />
              <img src="/assets/img/imagesliddetalhe.png" alt="Thumbnail 3" className="img-thumbnail" style={{ width: '18%' }} />
              <img src="/assets/img/imagesliddetalhe.png" alt="Thumbnail 4" className="img-thumbnail" style={{ width: '18%' }} />
              <img src="/assets/img/imagesliddetalhe.png" alt="Thumbnail 5" className="img-thumbnail" style={{ width: '18%' }} />
            </div>
          </Col>

          <Col md={6}>
            <h2 className="product-title">Ténis Nike Revolution 6 Next Nature Masculino</h2>
            <p className="text-muted">Casual | Nike | REF:38416711</p>
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-warning text-dark">4.7</span>
              <span className="ms-2 text-muted">(90 avaliações)</span>
            </div>
            <p className="price">R$ 219,00 <span className="old-price">210,00</span></p>
            <p className="product-description">Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mb-3">
              <h6>Tamanho</h6>
              <Button variant="outline-secondary" className="me-1">39</Button>
              <Button variant="outline-secondary" className="me-1">40</Button>
              <Button variant="outline-secondary" className="active">41</Button>
              <Button variant="outline-secondary" className="me-1">42</Button>
              <Button variant="outline-secondary">43</Button>
            </div>
            <div className="mb-3">
              <h6>Cor</h6>
              <span className="color-circle" style={{ backgroundColor: '#ff5555' }}></span>
              <span className="color-circle" style={{ backgroundColor: '#55ff55' }}></span>
              <span className="color-circle" style={{ backgroundColor: '#5555ff' }}></span>
            </div>
            <Button className="btn-buy btn-lg w-100">COMPRAR</Button>
          </Col>
        </Row>
      </section>

      <section className="container my-5">
        <div className="d-flex justify-content-between mb-3">
          <h5>Produtos Relacionados</h5>
          <Link to="/produtos">Ver todos <i className="bi bi-arrow-right"></i></Link>
        </div>
        <Row className="row-cols-2 row-cols-md-4 g-3">
          {[...Array(4)].map((_, index) => (
            <Col key={index}>
              <Card className="related-product-card">
                <Card.Img variant="top" src={productThumb} alt={`Produto ${index + 1}`} />
                <Card.Body className="text-center">
                  <Card.Subtitle className="text-muted">Tênis</Card.Subtitle>
                  <Card.Title>Produto {index + 1}</Card.Title>
                  <Card.Text>
                    <del>$200</del> <span className="text-danger">$100</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={3}>
              <h5><img src={logoFooter} alt="Digital Store" /></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="d-flex gap-3">
                <Link to="#" className="text-light"><i className="bi bi-facebook"></i></Link>
                <Link to="#" className="text-light"><i className="bi bi-instagram"></i></Link>
                <Link to="#" className="text-light"><i className="bi bi-twitter"></i></Link>
              </div>
            </Col>
            {/* Outras colunas do rodapé, como links e contato */}
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default ProductViewPage;