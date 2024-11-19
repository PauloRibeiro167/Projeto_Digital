import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col, Card } from 'react-bootstrap';
=======
>>>>>>> 77c0e4f0ef87893e69caff73000ed5f7bb30b9bf
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

// Importação de imagens estáticas
import dropSupreme from '@images/collection-1.png';
import colecaoAdidas from '@images/collection-2.png';
import beatBass from '@images/collection-3.png';

const collections = [
  {
    src: dropSupreme,
    alt: 'Novo drop Supreme',
    discount: '30% OFF',
  },
  {
    src: colecaoAdidas,
    alt: 'Coleção Adidas',
    discount: '20% OFF',
  },
  {
    src: beatBass,
    alt: 'Beat Bass',
    discount: '50% OFF',
  },
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