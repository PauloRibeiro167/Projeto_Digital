import { config } from 'dotenv';
import pkg from 'pg';

config({ path: '/home/e06158795/Documentos/Projetos_pessoais/Projetos_em_Desenvolvimento/digital college/Projeto_Digital/Drip-store/Backend/config/.env' });

const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

const getShoesData = async () => {
  try {
    const query = 'SELECT * FROM shoes';
    const res = await client.query(query);
    console.log('Dados dos tênis:', res.rows);
    return res.rows;
  } catch (error) {
    console.error('Erro ao buscar dados dos tênis:', error);
  } finally {
    client.end();
  }
};

getShoesData();