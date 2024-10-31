// src/pages/Home/HomePage.jsx
import React from 'react';
import CustomNavbar from '@components/navbar/navbar1';
import Carrossel1 from '@components/carousel/carroussel1';
import Footer1 from '@components/footer/footer1';

const HomePage = () => {
  return (
    <div className="w-100">
      <CustomNavbar />
      <Carrossel1 />
      <Footer1 />
    </div>
  );
};

export default HomePage;