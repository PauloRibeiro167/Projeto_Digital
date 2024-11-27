CREATE DATABASE api_data_db;

\c api_data_db

CREATE TABLE shoes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  nota FLOAT,
  marca VARCHAR(255),
  modelo VARCHAR(255),
  referencia VARCHAR(255),
  preco_original FLOAT,
  preco_desconto FLOAT,
  imagem_url TEXT,
  cores TEXT[],
  tamanhos INTEGER[],
  backgrounds TEXT[]
);