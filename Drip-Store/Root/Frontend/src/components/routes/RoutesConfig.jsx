// src/components/RoutesConfig.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@public/HomePage.jsx';
import PublicPage from '@public/PublicPage.jsx';
import AdminPage from '@admin/AdminPage.jsx';
import AuthPage from '@public/AuthPages.jsx';
import CadastroPage from '@public/Cadastro.jsx';
import PaymentPage from '@public/PaymentPage.jsx';
import ErrorPage from '@public/ErrorPage.jsx';
import ShowProducts from '@public/ShowProducts.jsx';
import ProductViewPage from '@public/ProductViewPage.jsx';
import SuperAdmin from '@admin/SuperAdmin.jsx';
import PrivateRoute from '@components/routes/PrivateRoutes.jsx';
import { paths } from '@utils/paths';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.public} element={<PublicPage />} />
      <Route path={paths.login} element={<AuthPage />} />
      <Route path={paths.payment} element={<PaymentPage />} />
      <Route path={paths.admin} element={<PrivateRoute element={<AdminPage />} />} />
      <Route path={paths.cadastro} element={<CadastroPage />} />
      <Route path={paths.show_products} element={<ShowProducts />} />
      <Route path={`${paths.show_products}/:id`} element={<ProductViewPage />} />
      <Route path={paths.super_admin} element={<PrivateRoute element={<SuperAdmin />} />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesConfig;