import express from 'express';
import path from 'path';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import pkg from 'pg';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

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

const corsOptions = {
  origin: 'http://127.0.0.1:5173', // URL do frontend
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Tentativa de login:', { username, password });

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    res.json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
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