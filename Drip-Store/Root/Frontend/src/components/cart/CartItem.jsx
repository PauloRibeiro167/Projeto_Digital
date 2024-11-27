import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ item, addToCart, removeFromCart, getColorStyle }) => {
  return (
    <li className="d-flex align-items-center mb-3">
      <Button variant="danger" size="sm" onClick={() => removeFromCart(item, item.size, item.color)}>
        -
      </Button>
      <img src={item.imagem_url} alt={item.nome} className="img-thumbnail me-3 ms-2" style={{ width: '50px', height: '50px' }} />
      <div className="flex-grow-1">
        {item.nome}
      </div>
      <Button
        variant="outline-secondary"
        className="me-2"
        disabled
      >
        {item.size}
      </Button>
      <Button
        variant="outline-secondary"
        className="p-2 rounded-circle fs-6 btn-sm btn-color me-5"
        style={getColorStyle(item.color)}
        disabled
      >
      </Button>
      <Button variant="primary" size="sm" onClick={() => addToCart(item, item.size, item.color)}>
        +
      </Button>
    </li>
  );
};

export default CartItem;