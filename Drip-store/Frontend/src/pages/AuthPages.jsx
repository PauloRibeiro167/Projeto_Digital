import '@styles/Auth/AuthPages.css';
import React, { useState } from 'react';
import { useAuth } from '@context/auth';
import mercadoria from '@images/sapatos.png';
import Footer1 from '@components/footer/footer1';
import { CustomNbar } from '@components/navbar/nbar.jsx';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import facebookIcon from '@images/icons/facebook.png';
import gmail from '@images/icons/gmail.png';
import { Link } from 'react-router-dom';
import { paths } from '../utils/paths';

const AuthPage = () => {
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
                <h3 className="text-center mb-3">Acesse sua Conta</h3>
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
                  <p className='justify-content-start mt-3 text-dark text-decoration-underline'>Esqueci minha senha</p>
                  </Form.Group>
                  <Button className="w-100 mt-1 mb-3" type="submit" style={{ backgroundColor: '#c92071' }}>
                    Login
                  </Button>
                  <div className="mt-2 ms-3 d-flex align-items-center text-secondary">
                    Ou faça o login com
                    <div className="d-flex justify-content-start ms-3">
                      <img src={gmail} alt="Google" className="me-2" style={{ width: "15%" }} />
                      <img src={facebookIcon} alt="Facebook" className="me-2" style={{ width: "15%" }} />
                    </div>
                  </div>
                  <div className="mt-2 ms-3 d-flex align-items-center text-secondary">
                    Não tem uma conta? <Link to={paths.cadastro} className="ms-1">Cadastre-se</Link>
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

export default AuthPage;