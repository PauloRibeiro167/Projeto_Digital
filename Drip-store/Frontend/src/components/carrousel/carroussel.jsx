import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '@styles/carroussel/carroussel.css';
import { fetchData } from '../../services/api';
import image from '@images/White-Sneakers-PNG-Clipart 1.svg';

const Carrossel1 = () => {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function getSlides() {
      try {
        const data = await fetchData();
        const filteredSlide = data.find(slide => slide.id === 14);
        if (filteredSlide) {
          setSlides([filteredSlide, filteredSlide, filteredSlide, filteredSlide]);
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
    <div className="carousel-container w-100 bg-light">
      <div className="carousel-content h-100">
        <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={3000} className="h-100">
          {slides.map((slide, index) => (
            <Carousel.Item key={index} className="h-100">
              <div className="d-flex align-items-center justify-content-center text-md-start text-center container flex-column flex-md-row">
                <section className="order-2 order-md-1 py-5 flex-fill">
                  <div>
                    <h6 className="carousel-mini-text">Melhores ofertas personalizadas</h6>
                    <h1 className=" carousel-info">
                      Queima de estoque Nike <span className="text-danger">🔥</span>
                    </h1>
                    <p className=" carousel-text ">
                      Consequat culpa exercitation mollit nisi excepteur do do tempor laboris
                      eiusmod irure consectetur.
                    </p>
                    <button className="btn btn-carousel col-md-12">Ver Ofertas</button>
                  </div>
                </section>
                <section className="order-1 order-md-2 flex-fill">
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={slide.nome}
                    style={{ marginBottom: '20px' }}
                  />
                </section>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
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