import React, { useState, useEffect } from 'react';
import '@styles/button/toggletheme.css';

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = sessionStorage.getItem('isDarkTheme');
    return savedTheme ? JSON.parse(savedTheme) : document.documentElement.classList.contains('dark-theme');
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
    sessionStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div onClick={toggleTheme} className="toggle-theme-button">
    {isDarkTheme ? (
      <span><i className="bi bi-toggle-on on fs-3"></i></span>
    ) : (
      <span><i className="bi bi-toggle-off off fs-3"></i></span>
    )}
  </div>
  );
};

export default ToggleTheme;