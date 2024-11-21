import React from 'react';
import { Container, Navbar, Nav, Badge, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoHeader from '@images/logo-header.png';
import logoFooter from '@images/logo-footer.svg';
import productThumb from '@images/product-thumb-5.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ShowProducts = () => {
  return (
    <>
      <header className="bg-light border-bottom py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img src={logoHeader} alt="Digital Store" />
          </Navbar.Brand>
          <Form.Control type="search" className="w-50 p-3" placeholder="Pesquisar produto..." />
          <div>
            <Link to="/cadastro" className="text-dark me-3">Cadastre-se</Link>
            <Link to="/login" className="btn btn-primary">Entrar</Link>
            <Link to="/cart" className="text-dark position-relative">
              <img src={miniCart} alt="Carrinho" />
              <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                2
              </Badge>
            </Link>
          </div>
        </Container>
        <Container className="d-flex justify-content-between align-items-center mt-5">
          <div>
            <Link to="/cadastro" className="text-dark me-3">Cadastre-se</Link>
            <Link to="/produtos" className="text-dark me-3">Produtos</Link>
            <Link to="/categorias" className="text-dark me-3">Categorias</Link>
            <Link to="/meus-pedidos" className="text-dark me-3">Meus Pedidos</Link>
          </div>
        </Container>
      </header>

      <main className="container my-5">
        <section>
          <div className="d-flex justify-content-between mb-3">
            <h6>Resultados para “Ténis” - 369 produtos</h6>
            <Form.Select className="w-auto">
              <option>Ordenar por: mais relevantes</option>
            </Form.Select>
          </div>

          <div className="row">
            <aside className="col-lg-3">
              <div className="sidebar">
                <h5>Filtrar por</h5>
                <hr />
                <h6 className="mt-4">Marca</h6>
                <Form.Check type="checkbox" id="adidas" label="Adidas" />
                <Form.Check type="checkbox" id="calci" label="Calciéncaga" />
                <Form.Check type="checkbox" id="kswiss" label="K-Swiss" defaultChecked />
              </div>
            </aside>

            <section className="col-lg-9">
              <div>
                <Row className="row-cols-2 row-cols-md-3 g-3">
                  {[...Array(10)].map((_, index) => (
                    <Col key={index}>
                      <Card>
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
              </div>
            </section>
          </div>
        </section>
      </main>

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

export default ShowProducts;