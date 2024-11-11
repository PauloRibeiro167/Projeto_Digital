// routes/AdminRoutes.js
import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/admin', authMiddleware, (req, res) => {
  res.send('Conteúdo administrativo');
});

router.get('/admin/dashboard', authMiddleware, (req, res) => {
  res.send('Dashboard administrativo');
});

export default router;