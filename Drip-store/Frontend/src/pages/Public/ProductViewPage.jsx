import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb, Badge } from 'react-bootstrap';
import { fetchData } from '@api-tenis';
import 'bootstrap-icons/font/bootstrap-icons.css';
import productThumb from '@images/product-thumb-5.jpeg';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';
import '@styles/pages/ProductsViewPage.css';

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchData();
        const product = data.find((product) => product.id === parseInt(id));
        setProduct(product);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <CustomNavbar />
      <Container fluid className="w-100 p-5 py-5 background">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className='text-color'>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/Show_products" }} className='text-color'>
            Produtos
          </Breadcrumb.Item>
          <Breadcrumb.Item active className='text-primary'>
            {product.nome}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Product Section */}
      <Container fluid className="d-flex w-100 p-5 py-5 background">
        <Row className="gy-4">
          <Col lg={6}>
            <img
              src={product.imagem_url || "/assets/img/imagesliddetalhe.png"}
              alt={product.nome}
              className="img-fluid rounded mb-3 product-image w-50"
            />
            <div className="d-flex justify-content-between gap-2">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={product.imagem_url || "/assets/img/imagesliddetalhe.png"}
                  alt={`Thumbnail ${index + 1}`}
                  className="img-thumbnail product-thumbnail"
                />
              ))}
            </div>
          </Col>

          {/* Product Details */}
          <Col lg={6}>
            <h2 className="product-title background text-color">{product.nome}</h2>
            <p className="text-muted text-color">Casual | {product.marca} | REF: {product.id}</p>
            <div className="d-flex align-items-center mb-2">
              <Badge bg="warning" text="dark">
                4.7
              </Badge>
              <span className="ms-2 text-muted text-color">(90 avaliações)</span>
            </div>
            <p className="price fs-4">
              <strong className="text-success text-color">R$ {product.preco_desconto}</strong>{" "}
              <del className="text-muted fs-6 text-color">R$ {product.preco_original}</del>
            </p>
            <p className="product-description text-success">
              Descrição do produto: {product.descricao}
            </p>

            {/* Tamanhos */}
            <div className="mb-3 text-color">
              <h6>Tamanho</h6>
              {product.tamanhos.map((size) => (
                <Button
                  key={size}
                  variant="outline-secondary"
                  className="me-1"
                  active={size === 41}
                >
                  {size}
                </Button>
              ))}
            </div>
            <div className="mb-3 text-color">
              <h6>Cor</h6>
              {product.cores.map((color, index) => (
                <span
                  key={index}
                  className="d-inline-block me-2 rounded-circle border product-color"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            <Button className="btn-buy btn-lg w-100">COMPRAR</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="background p-5 py-5">
        <div className="d-flex justify-content-between mb-3">
          <h5 className='text-color'>Produtos Relacionados</h5>
          <Link to="/Show_products" className="text-primary">
            Ver todos <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <Row className="gy-4 w-75 d-flex justify-content-center">
          {[...Array(4)].map((_, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="h-100 related-product-card">
                <Card.Img variant="top" src={productThumb} alt={`Produto ${index + 1}`} />
                <Card.Body className="text-center">
                  <Card.Subtitle className="text-muted text-color">Tênis</Card.Subtitle>
                  <Card.Title className='text-color'>Produto {index + 1}</Card.Title>
                  <Card.Text>
                    <del className="text-muted text-color">R$ 200,00</del>{" "}
                    <span className="text-danger fw-bold">R$ 100,00</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer1 />
    </>
  );
};

export default ProductViewPage;