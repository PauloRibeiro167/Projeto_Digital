// routes/PublicRoutes.js
import express from 'express';
const router = express.Router();

// Definindo namespace para rotas públicas
router.get('/public', (req, res) => {
  res.send('Conteúdo público');
});

// Adicionando rotas subsequentes
router.get('/public/info', (req, res) => {
  res.send('Informações públicas');
});

export default router;