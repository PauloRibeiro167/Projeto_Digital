import React from 'react';
import '@styles/button/Secondarybtn.css';

const SecondaryBtn = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`secondary-button ${className}`}>
      {label}
    </button>
  );
};

export default SecondaryBtn;