// src/components/seachbar/seachbar.jsx
import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import '@styles/seachbar/seachbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import pesquisa from '@images/icons/pesquisa.png';

const Seachbar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    
    console.log('Formulário enviado');
  };

  return (
    <Form className="form w-50" onSubmit={handleSearch}>
      <InputGroup className="search custom-input-group">
        <FormControl type="search" placeholder="Pesquisar" aria-label="Search" />
        <InputGroup.Text className="botão">
          <input
            type="image"
            src={pesquisa}
            alt="Pesquisa"
            className="icon"
          />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default Seachbar;