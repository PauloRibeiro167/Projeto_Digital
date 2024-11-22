import '@styles/Auth/AuthPages.css';
import React, { useState } from 'react';
import { useAuth } from '@context/auth';
import mercadoria from '@images/sapatos.png';
import Footer1 from '@components/footer/footer1';
import { CustomNbar } from '@components/navbar/nbar.jsx';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import facebookIcon from '@images/icons/facebook.png';
import gmail from '@images/icons/gmail.png';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '@utils/paths';

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

    // Verificação explícita para o usuário 1234 e senha 1234
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
      <CustomNbar />
      <div className="d-flex justify-content-center align-items-center cordefundo w-100">
        <Row className="w-75 justify-content-center mb-5"> {/*tamanho do card*/}
          <Col className="d-flex justify-content-center">
            <Card className="shadow-sm py-0 p-1 shadow-sm m-1 mt-5 mb-5 w-100 card">
              <Card.Body className='bg-white rounded-3 p-3'> {/*Parte de cima do card*/}
                <h3 className="text-center mb-3 mt-3 text">Acesse sua Conta</h3>

                <div className="m-2 d-flex justify-content-center align-items-center text-center text-secondary">
                  Não tem uma conta? <Link to={paths.cadastro} className="ms-1">Cadastre-se</Link>
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
                      <Link to={paths.cadastro}>
                      <img
                      src={gmail} alt="Google" className="me-2" style={{ width: "15%" }} /> </Link>
                      <Link to={paths.cadastro}> 
                      <img src={facebookIcon} alt="Facebook" className="me-2" style={{ width: "15%" }} /> </Link>
                    </div>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/*Imagem do Sapato na Tela*/}
          <Col xs={12} md={6} className="d-none d-md-flex justify-content-center">
            <img src={mercadoria} alt="Sapatos modelo melvin bueno" className="img-fluid" style={{ maxWidth: "500px" }} />
          </Col>
        </Row>
      </div>
      <Footer1 />
    </>
  );
};

export default AuthPage;