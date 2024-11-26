import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '@styles/carroussel/carroussel.css';
import { fetchData } from '../../services/api';

const Carrossel1 = () => {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function getSlides() {
      try {
        const data = await fetchData();
        const item14 = data.find(item => item.id === 14);
        if (item14) {
          const replicatedSlides = Array(4).fill(item14);
          setSlides(replicatedSlides);
        } else {
          console.error('Item 14 não encontrado nos dados da API');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    getSlides();
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="carousel-container w-100">
      <div className="carousel-content h-100">
        {slides.length > 0 ? (
          <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={3000} className="h-100">
            {slides.map((slide, index) => (
              <Carousel.Item key={index} className="h-100">
                <div className="d-flex align-items-center justify-content-center text-md-start text-center container flex-column flex-md-row ">
                  <section className="order-2 order-md-1 py-5 flex-fill m-5 py-5 w-50 mt-5 mb-5">
                    <div>
                      <h6 className="carousel-mini-text">As Melhores Ofertas Personalizadas</h6>
                      <h1 className="carousel-info">
                        BlackFriday e Frete Grátis no site todo<span className="text-danger">🔥</span>
                      </h1>
                      <p className="carousel-text">
                        À partir de $300 em compras receba cupom de Frete Grátis em qualquer produto do site.
                      </p>
                      <button className="btn btn-carousel col-md-12">Ver Ofertas</button>
                    </div>
                  </section>
                  <section className="order-1 order-md-2 flex-fill w-50 mt-5 rotate-img">
                    <img
                      className="d-block w-100"
                      src={slide.imagem_url}
                      alt={slide.nome}
                      style={{ marginBottom: '20px' }}
                    />
                  </section>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Carregando...</p>
        )}
        <div className="radio-buttons mt-4">
          {slides.map((_, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                id={`radio-${index}`}
                name="carousel-radio"
                checked={activeIndex === index}
                onChange={() => handleSelect(index)}
              />
              <label htmlFor={`radio-${index}`}></label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrossel1;