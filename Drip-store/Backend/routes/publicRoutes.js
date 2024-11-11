2// routes/PublicRoutes.js
import express from 'express';
const router = express.Router();

router.get('/public', (req, res) => {
  res.send('Conteúdo público');
});

router.get('/public/info', (req, res) => {
  res.send('Informações públicas');
});

export default router;