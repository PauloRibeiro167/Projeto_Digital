// src/components/button/Buttons.jsx
import React from 'react';
import '@styles/button/buttons.css';

export const BtPrymary = ({ children }) => {
  return (
    <button className="btn-base bprimary glow-on-hover">{children}</button>
  );
};

export const BtSecondary = ({ children }) => {
  return (
    <button className="btn-base btSecondary glow-on-hover">{children}</button>
  );
};

export const BtTertiary = ({ children }) => {
  return (
    <button className="btn-base btTertiary glow-on-hover">{children}</button>
  );
};