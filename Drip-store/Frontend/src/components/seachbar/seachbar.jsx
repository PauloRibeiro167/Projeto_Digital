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
        // {falta implementar logicas de busca}
    console.log('Formulário enviado');
  };

  return (

    <Form className="form w-50" onSubmit={handleSearch}>

      <InputGroup className="search bg-primary">
        <FormControl
          type="search"
          placeholder="Pesquisar"
          aria-label="Search"
          className="border-0"
        />


        <InputGroup.Text className="botão border-0">
          <input
            type="image"
            src={pesquisa}
            alt="Pesquisa"
            className="icon border-0"
          />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default Seachbar;