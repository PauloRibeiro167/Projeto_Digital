import { useState, useEffect } from 'react';
import { fetchData } from '@api-tenis';

// Função para criar itens de breadcrumb
export const createBreadcrumbItems = (productName) => {
  return [
    { label: 'Home', link: '/' },
    { label: 'Produtos', link: '/Show_products' },
    { label: productName, active: true }
  ];
};

// Função para buscar o produto e produtos relacionados
export const useProductData = (id) => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchData();
        const product = data.find((product) => product.id === parseInt(id));
        setProduct(product);
        setRelatedProducts(data.filter((p) => p.id !== parseInt(id)));
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    getProduct();
  }, [id]);

  return { product, relatedProducts };
};

// Função para obter o estilo da cor
export const getColorStyle = (color, selectedColor) => {
  return {
    backgroundColor: color,
    borderColor: selectedColor === color ? 'black' : color,
    color: selectedColor === color ? 'white' : 'black'
  };
};

// Função para adicionar ao carrinho
export const handleAddToCart = (product, selectedSize, selectedColor, addToCart) => {
  if (selectedSize && selectedColor) {
    addToCart(product, selectedSize, selectedColor);
  } else {
    alert('Por favor, selecione um tamanho e uma cor.');
  }
};

// Configurações e scripts específicos para a página ProductViewPage
export const productsViewPageConfig = {
  createBreadcrumbItems,
  useProductData,
  getColorStyle,
  handleAddToCart,
};