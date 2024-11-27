// src/pages/admin/AdminPage.jsx
import React from 'react';
import AdminNavbar from '@components/navbar/admin/navbar.jsx';

const AdminPage = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4">
        <h1>Bem-vindo ao Painel Admin</h1>
      </div>
    </div>
  );
};

export default AdminPage;