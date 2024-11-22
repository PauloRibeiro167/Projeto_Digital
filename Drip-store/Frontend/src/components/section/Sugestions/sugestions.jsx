import react from 'react';

const Sugestions = () => {
    return (
        <div className="sugestions">
            <div className="sugestions__header">
                <h2 className="sugestions__title">Sugestões para você</h2>
                <button className="sugestions__button">Ver tudo</button>
            </div>
            <div className="sugestions__list">
                <div className="sugestions__item">
                    <img src="https://via.placeholder.com/150" alt="Sugestão 1" className="sugestions__image" />
                    <h3 className="sugestions__name">Nome do Produto</h3>
                    <p className="sugestions__price">R$ 0,00</p>
                </div>
                <div className="sugestions__item">
                    <img src="https://via.placeholder.com/150" alt="Sugestão 2" className="sugestions__image" />
                    <h3 className="sugestions__name">Nome do Produto</h3>
                    <p className="sugestions__price">R$ 0,00</p>
                </div>
                <div className="sugestions__item">
                    <img src="https://via.placeholder.com/150" alt="Sugestão 3" className="sugestions__image" />
                    <h3 className="sugestions__name">Nome do Produto</h3>
                    <p className="sugestions__price">R$ 0,00</p>
                </div>
                <div className="sugestions__item">
                    <img src="https://via.placeholder.com/150" alt="Sugestão 4" className="sugestions__image" />
                    <h3 className="sugestions__name">Nome do Produto</h3>
                    <p className="sugestions__price">R$ 0,00</p>
                </div>
            </div>
        </div>
    );
}

export default Sugestions;