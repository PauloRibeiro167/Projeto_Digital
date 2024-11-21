import React from 'react';
import '@styles/breadcrumbs/breadcrumbs.css';

const Breadcrumbs = () => {
  const breadcrumbItems = ['Home', 'Category', 'Product'];

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;