const ControleAcesso = {
  login: (req, res) => {
    const { username, password } = req.body;

    if (username === 'superadmin' && password === 'senhaSuperAdmin') {
      return res.json({ username, role: 'super_admin' });
    } else if (username === 'admin' && password === 'senhaAdmin') {
      return res.json({ username, role: 'admin' });
    } else if (username === 'user' && password === 'senhaUser') {
      return res.json({ username, role: 'user' });
    } else {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }
  }
};

module.exports = ControleAcesso;