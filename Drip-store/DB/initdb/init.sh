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
EOSQL

