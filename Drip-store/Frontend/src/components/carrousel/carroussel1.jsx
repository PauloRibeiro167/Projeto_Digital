import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '@styles/carroussel/carroussel1.css';
import { fetchData } from '../../services/api';

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
    <div className="carousel-container">
      <div className="carousel-content">
        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-item-content">
                <div className="carousel-text">
                  <div className="carousel-info">
                    <h6 style={{color: '#f6aa1c'}}>Melhores ofertas personalizadas</h6>
                    <h2 className='text'>Queima de estoque Nike 🔥</h2>
                    <p>Consequat culpa exercitation mollit nisi excepteur do do <br /> tempor laboris eiusmod irure consectetur.</p>
                    <button className="btn btn-primary">Ver ofertas</button>
                  </div>
                </div>
                <div className="carousel-image">
                  <img
                    className="d-block w-100"
                    src={slide.imagem_url}
                    alt={slide.nome}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="radio-buttons mt-3">
          {slides.map((slide, index) => (
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