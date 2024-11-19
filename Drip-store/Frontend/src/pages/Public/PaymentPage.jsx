// src/pages/Public/PaymentPage.jsx
import React, { useState } from 'react';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    email: '',
    phone: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    complement: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Nome Completo é obrigatório';
    if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.phone) newErrors.phone = 'Celular é obrigatório';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    if (!formData.neighborhood) newErrors.neighborhood = 'Bairro é obrigatório';
    if (!formData.city) newErrors.city = 'Cidade é obrigatório';
    if (!formData.state) newErrors.state = 'Estado é obrigatório';
    if (!formData.zipCode) newErrors.zipCode = 'CEP é obrigatório';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Enviar dados para o backend
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="w-100">
      <CustomNavbar />
      <div className="container mt-5">
        <h2>Informações Pessoais</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Nome Completo</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            {errors.cpf && <div className="text-danger">{errors.cpf}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Celular</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>

          <h2>Informações da Entrega</h2>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Endereço</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && <div className="text-danger">{errors.address}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="neighborhood" className="form-label">Bairro</label>
            <input
              type="text"
              className="form-control"
              id="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              required
            />
            {errors.neighborhood && <div className="text-danger">{errors.neighborhood}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">Cidade</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <div className="text-danger">{errors.city}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">Estado</label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            {errors.state && <div className="text-danger">{errors.state}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">CEP</label>
            <input
              type="text"
              className="form-control"
              id="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            {errors.zipCode && <div className="text-danger">{errors.zipCode}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="complement" className="form-label">Complemento</label>
            <input
              type="text"
              className="form-control"
              id="complement"
              value={formData.complement}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
      <Footer1 />
    </div>
  );
};

export default PaymentPage;
