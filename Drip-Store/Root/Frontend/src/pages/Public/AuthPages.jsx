import React, { Suspense, lazy, useState } from 'react';
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@context/auth';
import mercadoria from '@images/sapatos.png';
import facebookIcon from '@images/icons/facebook.png';
import gmail from '@images/icons/gmail.png';

const CustomNbar = lazy(() => import('@components/navbar/nbar.jsx'));
const Footer1 = lazy(() => import('@components/footer/footer1'));

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (username === '1234' && password === '1234') {
      navigate('/');
      return;
    }

    try {
      const userData = await login({ username, password });
      if (userData.role === 'super_admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <>
      <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>}>
        <CustomNbar />
      </Suspense>
      <div className="d-flex justify-content-center align-items-center cordefundo w-100">
        <Row className="w-75 justify-content-center mb-5"> 
          <Col className="d-flex justify-content-center">
            <Card className="shadow-sm py-0 p-1 shadow-sm m-1 mt-5 mb-5 w-100 card">
              <Card.Body className='bg-white rounded-3 p-3'> 
                <h3 className="text-center mb-3 mt-3 text">Acesse sua Conta</h3>

                <div className="m-2 d-flex justify-content-center align-items-center text-center text-secondary">
                  Não tem uma conta? <Link to="/user/new" className="ms-1">Cadastre-se</Link>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleAuth}>
                  <Form.Group className='text-start text-secondary m-4' controlId="formUsername">
                    <Form.Label className="text">Login</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu login ou email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="custom-placeholder"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mt-3 m-4 text-start text-secondary">
                    <Form.Label className="text">Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Insira sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="custom-placeholder"
                    />
                    <p className='justify-content-start mt-3 text text-decoration-underline'>Esqueci minha senha</p>
                  </Form.Group>

                  <Button className="w-75 mt-1 mb-3 m-4" type="submit" style={{ backgroundColor: '#c92071' }}>
                    Login
                  </Button>
                  <div className="m-2 d-flex justify-content-center align-items-center text-secondary">
                    Ou faça o login com
                    <div className="d-flex justify-content-start ms-3">
                      <Link to="/user/new">
                        <img src={gmail} alt="Google" className="me-2" style={{ width: "15%" }} />
                      </Link>
                      <Link to="/user/new">
                        <img src={facebookIcon} alt="Facebook" className="me-2" style={{ width: "15%" }} />
                      </Link>
                    </div>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="d-none d-md-flex justify-content-center">
            <img src={mercadoria} alt="Sapatos modelo melvin bueno" className="img-fluid" style={{ maxWidth: "500px" }} />
          </Col>
        </Row>
      </div>
      <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>}>
        <Footer1 />
      </Suspense>
    </>
  );
};

export default AuthPage;