import React, { useState } from 'react';
import { useAuth } from '@context/auth';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { paths } from '@utils/paths';

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    console.log('Formulário enviado');
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      console.log('Campos de login ou senha vazios');
      return;
    }

    const adminUser = {
      email: 'admin@example.com',
      password: 'Paulo1lotusred',
      role: 'super_admin'
    };

    console.log('Tentando autenticar com:', { username, password });

    if (username === adminUser.email && password === adminUser.password) {
      console.log('Credenciais de super admin corretas, redirecionando...');
      await login(adminUser);
      navigate(paths.super_admin);
      return;
    }

    try {
      const userData = await login({ username, password });
      console.log('Dados do usuário:', userData);
      if (userData.role === 'super_admin') {
        console.log('Usuário é super admin, redirecionando...');
        navigate(paths.super_admin);
      } else {
        console.log('Usuário não é super admin, redirecionando para home...');
        navigate(paths.home);
      }
    } catch (err) {
      setError('Credenciais inválidas');
      console.error('Erro ao tentar redirecionar para a página de admin:', err);
    }
  };

  return (
    <div>
      <Form onSubmit={handleAuth}>
        <Form.Group controlId="formUsername">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira seu login ou email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
};

export default AuthPage;