// middlewares/authMiddleware.js
export const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  } else {
    res.status(403).send('Acesso negado');
  }
};