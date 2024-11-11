// src/pages/AuthPages.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '@styles/Auth/Auth.css';
import Footer1 from '@components/footer/footer1';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleAuth = () => {
    const userData = { username, role: username === 'superadmin' ? 'superadmin' : 'user' };
    login(userData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const switchTheme = (theme) => {
    const themeLink = document.getElementById('theme-link');
    themeLink.href = theme;
  };

  return (
    <div className='w-100'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col md={10}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h1 className="text-center mb-4">{isLogin ? 'Login' : 'Cadastro'}</h1>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" className="w-100 mt-4" onClick={handleAuth}>
                    {isLogin ? 'Login' : 'Cadastrar'}
                  </Button>
                </Form>
                <Button variant="link" className="w-100 mt-2" onClick={toggleAuthMode}>
                  {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                </Button>
                <Button variant="secondary" className="w-100 mt-2" onClick={() => switchTheme('/src/assets/stylesheets/themes/dark-theme.css')}>
                  Switch to Dark Theme
                </Button>
                <Button variant="secondary" className="w-100 mt-2" onClick={() => switchTheme('/src/assets/stylesheets/themes/light-theme.css')}>
                  Switch to Light Theme
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    <Footer1 />
  </div>
  );
};

export default AuthPage;