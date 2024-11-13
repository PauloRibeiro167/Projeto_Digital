import '@styles/Auth/AuthPages.css';
import React, { useState } from 'react';
import { useAuth } from '@context/auth';
import mercadoria from '@images/sapatos.png';
import Footer1 from '@components/footer/footer1';
import { CustomNbar } from '@components/navbar/nbar.jsx';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

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

  return (
    <>
      <CustomNbar />
        <Container className="d-flex justify-content-center align-items-center min-vh-75 min-vw-100 cordefundo">
          <Row>
            <Col>
              <Card className="shadow-sm ms-3 py-1 p-3 shadow-sm m-4 ms-3">
                <Card.Body>
                  <h3 className="text-center mb-3">
                    {isLogin ? 'Acesse sua Conta' : 'Crie sua Conta'}</h3>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleAuth}>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Login *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Digite seu usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mt-3">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
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
          <img className="d-none d-md-block" src={mercadoria} alt="Sapatos modelo melvin bueno" style={{width: "40%"}} />
        </Container>
      <Footer1 />
    </>
  );
};

export default AuthPage;