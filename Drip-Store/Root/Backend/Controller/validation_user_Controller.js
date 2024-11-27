const validator = require('validator');

class ValidationUserControlador {
  // Valida se o nome contém obscenidades
  validar_nome(req, res) {
    const { nome } = req.body;
    const palavrasObscenas = ['palavra1', 'palavra2']; // Adicione palavras obscenas aqui

    for (let palavra of palavrasObscenas) {
      if (nome.toLowerCase().includes(palavra)) {
        return res.status(400).json({ erro: 'Nome contém palavras inapropriadas' });
      }
    }

    return res.status(200).json({ mensagem: 'Nome válido' });
  }

  // Valida se o e-mail é válido e existe
  validar_email(req, res) {
    const { email } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ erro: 'Email inválido' });
    }

    // Supondo que a validação foi bem-sucedida
    return res.status(200).json({ mensagem: 'Email válido' });
  }

  // Valida se as senhas são iguais
  validar_senhas(req, res) {
    const { senha, confirmarSenha } = req.body;

    if (senha !== confirmarSenha) {
      return res.status(400).json({ erro: 'As senhas não coincidem' });
    }

    return res.status(200).json({ mensagem: 'Senhas válidas' });
  }
}

module.exports = new ValidationUserControlador();