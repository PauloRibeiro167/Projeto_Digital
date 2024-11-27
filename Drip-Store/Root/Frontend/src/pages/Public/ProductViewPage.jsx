import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';
import RelatedProducts from '@components/section/Sugestions/RelatedProducts.jsx';
import Breadcrumbs from '@components/breadcrumb/breadcrumb.jsx';
import { productsViewPageConfig } from '@controllers/PagesController';
import '@styles/pages/ProductsViewPage.css';
import { CartContext } from '@context/cartcontext';

const ProductViewPage = () => {
  const { id } = useParams();
  const { product, relatedProducts } = productsViewPageConfig.useProductData(id);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Carregando...</div>;
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const breadcrumbItems = productsViewPageConfig.createBreadcrumbItems(product.nome);

  return (
    <>
      <CustomNavbar />
      <Container fluid className="w-100 p-5 py-1 background">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>
      <Container fluid className="d-flex w-100 p-5 py-1 background">
        <Row className="gy-4">
          <Col lg={6}>
            <img
              src={product.imagem_url || "/assets/img/imagesliddetalhe.png"}
              alt={product.nome}
              className="img-fluid rounded mb-3 py-2 p-4 product-image"
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
                  style={productsViewPageConfig.getColorStyle(color, selectedColor)}
                  disabled={!selectedSize}
                >
                </Button>
              ))}
            </div>
            <Button className="btn-buy btn-lg w-50"
              disabled={!selectedSize || !selectedColor}
              onClick={() => productsViewPageConfig.handleAddToCart(product, selectedSize, selectedColor, addToCart)}>
              Adicionar ao carrinho
            </Button>
          </Col>
        </Row>
      </Container>
      <RelatedProducts relatedProducts={relatedProducts} />
      <Footer1 />
    </>
  );
};

export default ProductViewPage;