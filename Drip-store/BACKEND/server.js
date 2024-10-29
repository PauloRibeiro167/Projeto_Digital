// server.js ou arquivo de configuração do banco de dados
import { Pool } from 'pg';

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

export default pool;