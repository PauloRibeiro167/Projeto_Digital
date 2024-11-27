import React from 'react';
import '@styles/button/discount.css';

const Discounbtn = ({ discount, onClick, className }) => {
  return (
    <button onClick={onClick} className={`discount-button ${className}`}>
      {`${discount}% - OFF`}
    </button>
  );
};

export default Discounbtn;