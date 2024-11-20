
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleAuth = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    const userData = { username, role: username === 'superadmin' ? 'superadmin' : 'user' };
    login(userData);
  };

  return (
    <>
      <CustomNbar />
      <Container fluid className="d-flex justify-content-center align-items-center cordefundo" style={{width: "100%"}}>
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <Card className="shadow-sm py-1 p-3 shadow-sm m-4" style={{ width: '100%', maxWidth: '500px' }}>
              <Card.Body>
                <h3 className="text-center mb-3">Crie sua Conta

                  aqui que eu estou pelo amor de deus 
                </h3>
                {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleAuth}>
                  <Form.Group className='text-start text-secondary' controlId="formUsername">
                    <Form.Label className="text-dark">Login</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu login ou email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="custom-placeholder"
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mt-3 text-start text-secondary">
                    <Form.Label className="text-dark">Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Insira sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="custom-placeholder"
                    />
                  </Form.Group>
                  <Button className="w-100 mt-1 mb-3" type="submit" style={{ backgroundColor: '#c92071' }}>
                    Cadastrar
                  </Button>
                  <div className="mt-2 ms-3 d-flex align-items-center text-secondary">
                    Já tem uma conta? <Link to={paths.login} className="ms-1">Faça login</Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <img className="d-none d-md-block" src={mercadoria} alt="Sapatos modelo melvin bueno" style={{width: "100%", maxWidth: "500px"}} />
          </Col>
        </Row>
      </Container>
      <Footer1 />
    </>
  );
};

export default CadastroPage;