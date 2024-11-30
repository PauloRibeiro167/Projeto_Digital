// src/components/forms/form_user.jsx
import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const UserForm = ({ formData, handleChange, handleSubmit, error, mode }) => {
  const isViewMode = mode === 'view';

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center mb-3 mt-3 text">{mode === 'edit' ? 'Editar Informações' : 'Cadastro'}</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className='text-start text-secondary m-4' controlId="formNome">
        <Form.Label className="text">Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira seu nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="custom-placeholder"
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="cpf">
        <Form.Label className="text-dark">CPF *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira seu CPF"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="email">
        <Form.Label className="text-dark">E-mail *</Form.Label>
        <Form.Control
          type="email"
          placeholder="Insira seu email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="celular">
        <Form.Label className="text-dark">Celular *</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Insira seu celular"
          name="celular"
          value={formData.celular}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>

      <h5 className="text-center mt-4">Informações de Entrega</h5>
      <Form.Group className='text-start text-secondary mt-3' controlId="endereco">
        <Form.Label className="text-dark">Endereço *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira seu endereço"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="bairro">
        <Form.Label className="text-dark">Bairro *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira seu bairro"
          name="bairro"
          value={formData.bairro}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="cidade">
        <Form.Label className="text-dark">Cidade *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira sua cidade"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="cep">
        <Form.Label className="text-dark">CEP *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira seu CEP"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          required
          readOnly={isViewMode}
        />
      </Form.Group>
      <Form.Group className='text-start text-secondary mt-3' controlId="complemento">
        <Form.Label className="text-dark">Complemento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira complemento"
          name="complemento"
          value={formData.complemento}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </Form.Group>

      {!isViewMode && (
        <Form.Group className="form-check mb-4 mt-4 text-start" controlId="ofertas">
          <Form.Check
            type="checkbox"
            label="Quero receber por email ofertas e novidades das lojas da Digital Store."
            name="ofertas"
            checked={formData.ofertas}
            onChange={handleChange}
          />
        </Form.Group>
      )}
      {!isViewMode && (
        <Button className="w-75 mt-1 mb-3 m-4" type="submit" style={{ backgroundColor: '#c92071' }}>
          {mode === 'edit' ? 'Salvar' : 'Cadastrar'}
        </Button>
      )}
    </Form>
  );
};

export default UserForm;