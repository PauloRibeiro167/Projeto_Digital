import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@styles/section/categorias/section-categorias.css';

const SectionCategorias = () => {
  // Estado para armazenar as coleções
  const [collections, setCollections] = useState([]);

  // Efeito para buscar as coleções da API
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        // Substitua pela URL da sua API
        const response = await fetch('URL_DA_SUA_API');
        const data = await response.json();
        
        // Assumindo que a resposta da API tenha um array de coleções
        setCollections(data); 
      } catch (error) {
        console.error('Erro ao buscar as coleções:', error);
      }
    };

    fetchCollections();
  }, []); // O array vazio faz com que o useEffect rode apenas uma vez

  // Função para renderizar os cards
  const renderCard = (collection, index) => (
    <Col md={4} key={index}>
      <Card className="bg-transparent border-0 position-relative">
        <Card.Img src={collection.src} alt={collection.alt} />
        <Button variant="success" className="position-absolute top-0 start-0 m-5">
          {collection.discount || '30% Off'}  {/* Desconto, se houver */}
        </Button>
        <Button variant="primary" className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
          Comprar
        </Button>
      </Card>
    </Col>
  );

  return (
    <Container className="section-categorias text">
      <h4 className="text-start text-color ms-4">Coleções em destaque</h4>
      <Row>
        {collections.length > 0 ? (
          collections.map((collection, index) => renderCard(collection, index))
        ) : (
          <Col>Loading...</Col> // Exibe um texto de carregamento enquanto as coleções não são carregadas
        )}
      </Row>
    </Container>
  );
};

export default SectionCategorias;
