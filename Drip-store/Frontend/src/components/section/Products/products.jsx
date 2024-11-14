import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@styles/section/Products/products.css';
import { fetchData } from '@api-tenis';

const SectionProducts = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchData();
        const product = data.find(item => item.id === 0);
        setProduct(product);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    getProduct();
  }, []);

  const renderCards = () => {
    if (!product) return null;

    return Array.from({ length: 8 }).map((_, index) => (
      <Col key={index} md={3} className='mb-2'>
      <Card>
        <Card.Img variant="top" src={product.imagem_url} />
        <Card.Body/>
      </Card>
      <p className='text-start text-color fw-bold mt-4'>Tênis</p>
      <Card.Title className='text-start text-color mb-1'>{product.nome}</Card.Title>
      <Card.Text className='text-start mb-5'>
        <span className="text-color"><s className='text-secondary'>${product.preco_original}</s></span><strong className='text-color-black ms-2'>${product.preco_desconto}</strong>
      </Card.Text>
    </Col>
    ));
  };

  return (
    <Container className='p-5 mb-4 mt-2'>
      <Row>
        {renderCards()}
      </Row>
    </Container>
  );
};

export default SectionProducts;