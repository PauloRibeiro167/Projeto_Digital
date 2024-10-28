// backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(express.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database(':memory:');

// Criar tabela de usuários
db.serialize(() => {
  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT NOT NULL,
      surname TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
});

// Endpoint para criar um novo usuário
app.post('/users', async (req, res) => {
  const { firstname, surname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (firstname, surname, email, password) VALUES (?, ?, ?, ?)`,
    [firstname, surname, email, hashedPassword],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});