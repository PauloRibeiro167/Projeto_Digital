// src/FormUser.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './form_user.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log('Usuário criado com ID:', response.data.id);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Registro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="Primeiro Nome" onChange={handleChange} required />
        <input type="text" name="surname" placeholder="Sobrenome" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;