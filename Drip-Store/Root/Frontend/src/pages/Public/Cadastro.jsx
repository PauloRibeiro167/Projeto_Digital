import '@styles/Auth/AuthPages.css';
import React, { useState } from 'react';
import { useAuth } from '@context/auth';
import mercadoria from '@images/sapatos.png';
import Footer1 from '@components/footer/footer1';
import { CustomNbar } from '@components/navbar/nbar.jsx';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { paths } from '../../utils/paths';
import { Link } from 'react-router-dom';

const CadastroPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    complemento: '',
    ofertas: false,
  });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAuth = (e) => {
    e.preventDefault();
    const { nome, cpf, email, celular, endereco, bairro, cidade, cep } = formData;
    if (!nome || !cpf || !email || !celular || !endereco || !bairro || !cidade || !cep) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const userData = { username: email, role: 'user' };
    login(userData);
  };

  return (
    <>
      <CustomNbar />
      <Container fluid className="d-flex justify-content-center align-items-center cordefundo w-100">
        <Row className="w-100 m-3">
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <Card className="shadow-sm py-0 p-1 shadow-sm mt-4 mb-4 w-100 card">
              <Card.Body className='bg-white rounded-3 p-3 w-100'>
                <h3 className="text-center m-3">Criar Conta</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleAuth} className="m-4">
                  <h5 className="text-center">Informações Pessoais</h5>
                  <Form.Group className='text-start text-secondary' controlId="nome">
                    <Form.Label className="text-dark">Nome Completo *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="cpf">
                    <Form.Label className="text-dark">CPF *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu CPF"
                      value={formData.cpf}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="email">
                    <Form.Label className="text-dark">E-mail *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Insira seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="celular">
                    <Form.Label className="text-dark">Celular *</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Insira seu celular"
                      value={formData.celular}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <h5 className="text-center mt-4">Informações de Entrega</h5>
                  <Form.Group className='text-start text-secondary mt-3' controlId="endereco">
                    <Form.Label className="text-dark">Endereço *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu endereço"
                      value={formData.endereco}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="bairro">
                    <Form.Label className="text-dark">Bairro *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu bairro"
                      value={formData.bairro}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="cidade">
                    <Form.Label className="text-dark">Cidade *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira sua cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="cep">
                    <Form.Label className="text-dark">CEP *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu CEP"
                      value={formData.cep}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='text-start text-secondary mt-3' controlId="complemento">
                    <Form.Label className="text-dark">Complemento</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira complemento"
                      value={formData.complemento}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="form-check mb-4 mt-4 text-start" controlId="ofertas">
                    <Form.Check
                      type="checkbox"
                      label="Quero receber por email ofertas e novidades das lojas da Digital Store."
                      checked={formData.ofertas}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button className="w-100 mt-3 mb-3" type="submit" style={{ backgroundColor: '#c92071' }}>
                    Criar Conta
                  </Button>
                  <div className="mt-2 ms-3 d-flex align-items-center text-secondary">
                    Já tem uma conta? <Link to={paths.login} className="ms-1">Faça login</Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer1 />
    </>
  );
};

export default CadastroPage;