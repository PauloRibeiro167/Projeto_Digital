import express from 'express';
import path from 'path';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import pkg from 'pg';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false
});

const connectWithRetry = () => {
  pool.connect((err) => {
    if (err) {
      console.error('Erro ao adquirir cliente', err.stack);
      setTimeout(connectWithRetry, 5000); 
    } else {
      console.log('Conectado ao banco de dados');
    }
  });
};

connectWithRetry();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Tentativa de login:', { username, password });

  // Adicione a lógica de autenticação aqui

  res.json({ message: 'Login bem-sucedido' });
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../../Frontend')));

app.use(publicRoutes);
app.use(adminRoutes);

app.get('/routes', (req, res) => {
  res.json(listEndpoints(app));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default pool;