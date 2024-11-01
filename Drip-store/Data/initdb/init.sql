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

-- Cria uma tabela chamada 'cart'
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

-- Insere dados iniciais na tabela 'cart'
INSERT INTO cart (name, quantity, price) VALUES ('Produto A', 2, 19.99);
INSERT INTO cart (name, quantity, price) VALUES ('Produto B', 1, 9.99);

-- preciso ainda criar os produtos do site para poder definir uma variavel para inserir no carrinho
-- até o momento não tenho a função de inserir produtos no carrinho.