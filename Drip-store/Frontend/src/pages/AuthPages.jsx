import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import '@styles/Auth/AuthPages.css';
import Footer1 from '@components/footer/footer1';
import mercadoria from '@images/sapatos.png';
// import { CustomNbar } from '@components/navbar/nbar.jsx';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
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

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const switchTheme = (theme) => {
    const themeLink = document.getElementById('theme-link');
    themeLink.href = theme;
  };

  return (
    <>
      <CustomNbar />
      <Container className="d-flex justify-content-center align-items-center min-vh-100 min-vw-100 cordefundo">
        <Row>
          <Col>
            <Card className="py-4 p-5 shadow-sm">
              <Card.Body>
                <h1 className="d-flex mb-4">{isLogin ? 'Acesse sua Conta' : 'Crie sua Conta'}</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleAuth}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Login *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button className="w-100 mt-4 mb-4" type="submit" style={{ backgroundColor: '#c92071' }}>
                    {isLogin ? 'Login' : 'Cadastrar'}
                  </Button>
                </Form>
                <a className="mt-2" onClick={toggleAuthMode}>
                  {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <img className="w-50" src={mercadoria} alt="Sapatos modelo melvin bueno" />
      </Container>
      <Footer1 />
    </>
  );
};

export default AuthPage;