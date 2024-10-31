// routes/AdminRoutes.js
import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Definindo namespace para rotas administrativas
router.get('/admin', authMiddleware, (req, res) => {
  res.send('Conteúdo administrativo');
});

// Adicionando rotas subsequentes
router.get('/admin/dashboard', authMiddleware, (req, res) => {
  res.send('Dashboard administrativo');
});

export default router;