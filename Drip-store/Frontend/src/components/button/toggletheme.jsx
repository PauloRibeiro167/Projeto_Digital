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
    <div onClick={toggleTheme} className="toggle-theme-button d-flex align-items-center">
      <span className="me-2 span-text">{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
      {isDarkTheme ? (
        <i className="bi bi-toggle-on on fs-3"></i>
      ) : (
        <i className="bi bi-toggle-off off fs-3"></i>
      )}
    </div>
  );
};

export default ToggleTheme;