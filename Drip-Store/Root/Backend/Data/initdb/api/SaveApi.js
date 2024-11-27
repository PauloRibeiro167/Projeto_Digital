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

    const query = `
      INSERT INTO shoes (nome, nota, marca, modelo, referencia, preco_original, preco_desconto, imagem_url, cores, tamanhos, backgrounds)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;

    for (const shoe of data) {
      await client.query(query, [
        shoe.nome,
        shoe.nota,
        shoe.marca,
        shoe.modelo,
        shoe.referencia,
        shoe.preco_original,
        shoe.preco_desconto,
        shoe.imagem_url,
        shoe.cores,
        shoe.tamanhos,
        shoe.backgrounds
      ]);
    }

    console.log('Dados da API salvos no banco de dados.');
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  } finally {
    client.end();
  }
};

fetchData();