import { config } from 'dotenv';
import pkg from 'pg';
import fetch from 'node-fetch';

// Carregar o arquivo .env do diretório correto
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

const fetchData = async () => {
  try {
    console.log('API_URL:', process.env.API_URL); 
    const response = await fetch(process.env.API_URL);
    const data = await response.json();

    const query = 'INSERT INTO api_data (data) VALUES ($1)';
    await client.query(query, [JSON.stringify(data)]);

    console.log('Dados da API salvos no banco de dados.');
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  } finally {
    client.end();
  }
};

fetchData();