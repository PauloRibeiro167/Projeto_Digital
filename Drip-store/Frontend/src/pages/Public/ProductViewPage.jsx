import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb, Badge } from 'react-bootstrap';
import { fetchData } from '@api-tenis';
import 'bootstrap-icons/font/bootstrap-icons.css';
import productThumb from '@images/product-thumb-5.jpeg';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';
import '@styles/pages/ProductsViewPage.css';
import { LinkContainer } from 'react-router-bootstrap';

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchData();
        const product = data.find((product) => product.id === parseInt(id));
        setProduct(product);
        setRelatedProducts(data.filter((p) => p.id !== parseInt(id)));
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const getColorStyle = (color) => {
    return {
      backgroundColor: color,
      borderColor: selectedColor === color ? 'black' : color,
      color: selectedColor === color ? 'white' : 'black'
    };
  };

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
          <Col lg={6}>
            <h2 className="product-title background text-color">{product.nome}</h2>
            <p className="text-muted text-color">Casual | {product.marca} | REF: {product.id}</p>
            <div className="d-flex align-items-center mb-2 ms-5">
              <Badge bg="warning" text="dark">
                4.7
              </Badge>
              <span className="ms-2 text-muted text-color">(90 avaliações)</span>
            </div>
            <p className="price fs-4">
              <del className="text-muted fs-6 text-color text-start me-3">R$ {product.preco_original}</del>
              <strong className="text-success text-color">R$ {product.preco_desconto}</strong>{" "}
            </p>
            <p className="product-description text-success">
              Descrição do produto: {product.descricao}
            </p>
            <div className="mb-3 text-color">
              <h6>Tamanho</h6>
              {product.tamanhos.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'primary' : 'outline-secondary'}
                  className="me-1"
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            <div className="mb-3 text-color">
              <h6>Cor</h6>
              {product.cores.map((color, index) => (
                <Button
                  key={index}
                  variant={selectedColor === color ? 'primary' : 'outline-secondary'}
                  className={`me-1 p-2 rounded-circle fs-6 btn-sm btn-color ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => handleColorClick(color)}
                  style={getColorStyle(color)}
                  disabled={!selectedSize}
                >
                </Button>
              ))}
            </div>

            <Button  className="btn-buy btn-lg w-50"
              disabled={!selectedSize || !selectedColor}>
              COMPRAR
            </Button>
          </Col>
        </Row>
      </Container>
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
              <Card className="h-100 related-product-card">
                <Card.Img variant="top" src={relatedProduct.imagem_url || productThumb} alt={`Produto ${index + 1}`} className='card-color' />
                <Card.Body className="text-center">
                  <Card.Title className='text-color fs-6 mt-2'>{relatedProduct.nome}</Card.Title>
                  <Card.Text>
                    <del className="text-color text-secondary">R$ {relatedProduct.preco_original}</del>{" "}
                    <span className="text-danger fw-bold">R$ {relatedProduct.preco_desconto}</span>
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