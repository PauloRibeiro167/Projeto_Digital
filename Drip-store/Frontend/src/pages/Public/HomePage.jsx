// src/pages/Home/HomePage.jsx

//--> estrutura oficial da formação da HomePage
import React from 'react';
import CustomNavbar from '@components/navbar/navbar1';
import Carrossel1 from '@components/carrousel/carroussel';
import Footer1 from '@components/footer/footer1';
import SectionCategorias from '@components/section/categorias/section-categorias.jsx';
import SectionsColections from '@components/section/colections/section-colections.jsx';
import SectionProducts from '@components/section/Products/products.jsx';

const HomePage = () => {
  return (
    <div className="w-100">
      <CustomNavbar />
      <Carrossel1 />
      <SectionCategorias />
      <SectionsColections />
      <SectionProducts />
      <Footer1 />
    </div>
  );
};

export default HomePage;