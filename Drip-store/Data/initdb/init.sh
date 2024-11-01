#!/bin/bash
set -e 

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE mydatabase;
    \c mydatabase
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL
    );
    INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');

    CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        quantity INTEGER NOT NULL,
        price NUMERIC(10, 2) NOT NULL
    );
    INSERT INTO cart (name, quantity, price) VALUES ('Produto A', 2, 19.99);
    INSERT INTO cart (name, quantity, price) VALUES ('Produto B', 1, 9.99);
EOSQL