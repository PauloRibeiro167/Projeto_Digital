import React, { useState, useEffect } from 'react';
import '@styles/button/toggletheme.css';
import luaNova from '@images/button/lua-nova.svg';
import sol from '@images/button/sol.svg';
import noiteNublada from '@images/button/noite-nublada.svg';

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
    <div className="container">
      <label className="switch" onClick={toggleTheme}>
        <input type="checkbox" checked={isDarkTheme} readOnly />
        <span className="slider">
          <span className="ball">
            <span className="icon">
              <img className="theme-icon" src={isDarkTheme ? luaNova : sol} alt="theme icon" />
            </span>
          </span>
          <span className="cloud">
            <img className="cloud-icon" src={noiteNublada} alt="cloud icon" />
          </span>
        </span>
      </label>
    </div>
  );
};

export default ToggleTheme;