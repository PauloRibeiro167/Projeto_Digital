// src/context/cartcontext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Carregar itens do carrinho do banco de dados quando o componente é montado
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

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;