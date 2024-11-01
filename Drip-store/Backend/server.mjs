// server.mjs
import express from 'express';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import pkg from 'pg';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';

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

// Middleware para lidar com JSON e CORS
app.use(cors());
app.use(express.json());

// Rotas do carrinho de compras
app.get('/api/cart', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cart');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao carregar itens do carrinho:', error);
    res.status(500).send('Erro ao carregar itens do carrinho');
  }
});

app.post('/api/cart', async (req, res) => {
  const { id, name, quantity, price } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO cart (id, name, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, name, quantity, price]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao adicionar item ao carrinho:', error);
    res.status(500).send('Erro ao adicionar item ao carrinho');
  }
});

app.delete('/api/cart/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM cart WHERE id = $1 RETURNING *', [id]);
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao remover item do carrinho:', error);
    res.status(500).send('Erro ao remover item do carrinho');
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