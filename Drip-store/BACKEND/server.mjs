import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err) => {
  if (err) {
    console.error('Erro ao adquirir cliente', err.stack);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  } else {
    res.status(403).send('Acesso negado');
  }
};

app.get('/public', (req, res) => {
  res.send('Conteúdo público');
});

app.get('/admin', authMiddleware, (req, res) => {
  res.send('Conteúdo administrativo');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default pool;