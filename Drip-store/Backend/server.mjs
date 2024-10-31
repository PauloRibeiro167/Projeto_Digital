// server.mjs
import express from 'express';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import pkg from 'pg';
import listEndpoints from 'express-list-endpoints';

const { Pool } = pkg;
const app = express();
const port = 3000;

// Configuração do banco de dados
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

// Usar as rotas
app.use(publicRoutes);
app.use(adminRoutes);

// Listar todas as rotas
app.get('/routes', (req, res) => {
  res.json(listEndpoints(app));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default pool;