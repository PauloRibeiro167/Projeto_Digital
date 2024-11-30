// src/pages/Home/HomePage.jsx

import React, { Suspense, lazy } from 'react';
import "@styles/pages/homePage.css";

const CustomNavbar = lazy(() => import('@components/navbar/navbar1'));
const Carrossel1 = lazy(() => import('@components/carrousel/carroussel'));
const Footer1 = lazy(() => import('@components/footer/footer1'));
const SectionCategorias = lazy(() => import('@components/section/categorias/section-categorias.jsx'));
const SectionsColections = lazy(() => import('@components/section/colections/section-colections.jsx'));
const SectionProducts = lazy(() => import('@components/section/Products/products.jsx'));
const SpecialOffer = lazy(() => import('@components/section/special_offer/special_offer.jsx'));

const HomePage = () => {
  return (
    <div className="w-100 background">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomNavbar />
        <Carrossel1 />
        <SectionCategorias />
        <SectionsColections />
        <SectionProducts />
        <SpecialOffer />
        <Footer1 />
      </Suspense>
    </div>
  );
};

export default HomePage;