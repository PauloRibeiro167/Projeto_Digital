// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '@styles/login/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    // Simulação de autenticação
    const userData = { username, role: username === 'superadmin' ? 'superadmin' : 'user' };
    login(userData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        {/* container do login */}
        <Col md={6} className='card-login'>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h1 className="text-center mb-4">Login</h1>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Login *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira seu login ou email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Senha *</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" className="w-100 mt-4" onClick={handleLogin}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;