// src/context/cartcontext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Erro ao carregar itens do carrinho:', error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = (product, size, color) => {
    const newItem = {
      id: product.id,
      nome: product.nome,
      marca: product.marca,
      preco_desconto: product.preco_desconto,
      preco_original: product.preco_original,
      imagem_url: product.imagem_url,
      size,
      color
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    console.log('Item adicionado ao carrinho:', newItem);
  };

  const removeFromCart = (product, size, color) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex(item => item.id === product.id && item.size === size && item.color === color);
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1);
        return newItems;
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;