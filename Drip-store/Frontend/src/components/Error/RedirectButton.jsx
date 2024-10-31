// src/components/Error/RedirectButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../utils/paths.js';

const RedirectButton = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(paths.home);
    };
  
    return (
      <button onClick={handleClick}>Voltar para a página inicial</button>
    );
  };
  
  export default RedirectButton;