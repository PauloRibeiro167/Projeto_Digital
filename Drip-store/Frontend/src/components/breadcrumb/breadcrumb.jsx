import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/breadcrumbs/breadcrumbs.css';

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
            {item.link ? (
              <Link to={item.link} className="text-decoration-none text-color">
                {item.label}
              </Link>
            ) : (
              <span className={item.active ? 'text-primary' : ''}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;