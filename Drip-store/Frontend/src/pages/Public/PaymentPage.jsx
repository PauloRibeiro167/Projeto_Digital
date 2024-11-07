// src/pages/Public/PaymentPage.jsx
import React from 'react';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';

const PaymentPage = () => {
  return (
    <div className="w-100">
      <CustomNavbar />
      <form>
        {/* Adicione os campos do formulário de pagamento aqui */}
      </form>
      <Footer1 />
    </div>
  );
};

export default PaymentPage;