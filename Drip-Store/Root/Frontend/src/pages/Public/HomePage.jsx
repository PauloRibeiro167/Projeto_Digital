// src/pages/Home/HomePage.jsx

import React from 'react';
import CustomNavbar from '@components/navbar/navbar1';
import Carrossel1 from '@components/carrousel/carroussel';
import Footer1 from '@components/footer/footer1';
import SectionCategorias from '@components/section/categorias/section-categorias.jsx';
import SectionsColections from '@components/section/colections/section-colections.jsx';
import SectionProducts from '@components/section/Products/products.jsx';
import SpecialOffer from "@components/section/special_offer/special_offer.jsx";
import "@styles/pages/homePage.css";

const HomePage = () => {
  return (
    <div className="w-100 background">
      <CustomNavbar />
      <Carrossel1 />
      <SectionCategorias />
      <SectionsColections />
      <SectionProducts/>
      <SpecialOffer />
      <Footer1 />
    </div>
  );
};

export default HomePage;