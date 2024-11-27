import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@styles/section/categorias/section-categorias.css';
import dropSupreme from '@images/collection-1.png';
import colecaoAdidas from '@images/collection-2.png';
import beatBass from '@images/collection-3.png';
import Discounbtn from '@components/button/discount.jsx';
import SecondaryBtn from '@components/button/Secondarybtn.jsx';

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
      <h4 className='text-center text-color ms-5 fw-bold'>Coleções em Destaque</h4>
      <div className="scroll-container d-flex justify-content-center">
        {collections.map((collection, index) => (
          <div key={index} className='scroll-item me-5 ms-5'>
            <Card className="bg-transparent p-4 border-0 position-relative w-100">
              <Card.Img src={collection.src} alt={collection.alt} className='img-card'/>
              <Discounbtn 
                discount={collection.discount} 
                onClick={() => alert(`Desconto de ${collection.discount} aplicado!`)} 
                className="position-absolute top-5 start-3 m-2 rounded-4 py-1 p-2 discount-button-custom"
              />
              <SecondaryBtn 
                label="Comprar" 
                onClick={() => alert('Sem coleções!')} 
                className="btn-categorias position-absolute bottom-0 start-0 mb-5 mt-2 ms-5 me-5 rounded-3 py-1 px-3 p-2 w-75" 
              />
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default SectionCategorias;