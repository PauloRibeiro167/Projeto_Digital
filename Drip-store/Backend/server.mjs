import express from 'express';
import path from 'path';
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
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false
});

const connectWithRetry = () => {
  pool.connect((err) => {
    if (err) {
      console.error('Erro ao adquirir cliente', err.stack);
      setTimeout(connectWithRetry, 5000); // Tentar novamente após 5 segundos
    } else {
      console.log('Conectado ao banco de dados');
    }
  });
};

connectWithRetry();

// Middleware para lidar com JSON e CORS
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Usar as rotas
app.use(publicRoutes);
app.use(adminRoutes);

// Listar todas as rotas
app.get('/routes', (req, res) => {
  res.json(listEndpoints(app));
});

// Servir o arquivo index.html para qualquer rota não reconhecida
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default pool;