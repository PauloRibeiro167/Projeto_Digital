-- Cria um banco de dados chamado 'mydatabase'
CREATE DATABASE mydatabase;

-- Conecta ao banco de dados 'mydatabase'
\c mydatabase

-- Cria uma tabela chamada 'users'
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Insere dados iniciais na tabela 'users'
INSERT INTO users (name, email) VALUES ('João Silva', 'joao.silva@example.com');
INSERT INTO users (name, email) VALUES ('Maria Oliveira', 'maria.oliveira@example.com');