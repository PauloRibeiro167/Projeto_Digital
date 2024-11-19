import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@styles/section/categorias/section-categorias.css';
import collection1 from '@images/section/collections/collection-1.png';
import collection2 from '@images/section/collections/collection-2.png';
import collection3 from '@images/section/collections/collection-3.png';
import Discounbtn from '@components/button/discount.jsx';
import SecondaryBtn from '@components/button/Secondarybtn.jsx';

const collections = [
  { src: collection1, alt: "Novo drop Supreme", discount: 40 },
  { src: collection2, alt: "Coleção adiddas", discount: 30 },
  { src: collection3, alt: "Coleção 2", discount: 30 },
];

const SectionCategorias = () => {
  return (
    <Container className='section-categorias text'>
      <h4 className='text-start text-color ms-3 fw-bold'>Coleções em destaque</h4>
      <Row>
        {collections.map((collection, index) => (
          <Col md={4} key={index}>
            <Card className="bg-transparent p-4 border-0 position-relative">
              <Card.Img src={collection.src} alt={collection.alt} />
              <Discounbtn 
                discount={collection.discount} 
                onClick={() => alert(`Desconto de ${collection.discount}% aplicado!`)} 
                className="position-absolute top-5 start-3 m-3 rounded-4 py-2 p-2 fw-bold discount-button-custom"
              />
            <SecondaryBtn 
              label="Comprar agora" 
              onClick={() => alert('Botão Comprar agora clicado!')} 
              className="btn-categorias position-absolute bottom-0 start-0 mb-5 ms-5 rounded-3 py-2 px-3" 
            />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SectionCategorias;