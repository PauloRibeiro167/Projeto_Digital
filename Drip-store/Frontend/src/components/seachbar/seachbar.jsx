// src/components/seachbar/seachbar.jsx
import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import '@styles/seachbar/seachbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Seachbar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para enviar o formulário
    console.log('Formulário enviado');
  };

  return (
    <Form className="form-inline" onSubmit={handleSearch}>
      <InputGroup>
        <FormControl
          type="search"
          placeholder="Pesquisar"
          aria-label="Search"
        />
        <InputGroup.Text onClick={handleSearch} style={{ cursor: 'pointer' }}>
         
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default Seachbar;