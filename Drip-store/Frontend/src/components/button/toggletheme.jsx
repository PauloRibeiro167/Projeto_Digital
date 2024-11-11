import React, { useState, useEffect } from 'react';
import '@styles/button/toggletheme.css';

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return document.documentElement.classList.contains('dark-theme');
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <button onClick={toggleTheme} className="toggle-theme-button">
      {isDarkTheme ? (
        <span><i className="bi bi-toggle-off"></i></span>
      ) : (
        <span><i className="bi bi-toggle-on"></i></span>
      )}
    </button>
  );
};

export default ToggleTheme;