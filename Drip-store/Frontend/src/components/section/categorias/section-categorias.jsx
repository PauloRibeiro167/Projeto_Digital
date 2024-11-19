import React from 'react';
import '@styles/section/categorias/section-categorias.css';

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
    <section className="py-5" style={{ background: "rgba(249, 248, 254, 1)" }}>
      <div className="container">
        <h3 className="mb-4">Coleções em Destaque</h3>
        <div className="row g-3">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="position-relative">
                  <img
                    src={collection.src}
                    className="card-img-top"
                    alt={collection.alt}
                  />
                  <span className="badge custom-badge">{collection.discount}</span>
                  <a href="#" className="btn custom-button mb-4 ms-4">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCategorias;
