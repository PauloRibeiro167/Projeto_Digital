class ValidacaoEnderecoControlador {
  // Valida o formato e a viabilidade do endereço inserido
  validar_endereco(req, res) {
    const { endereco } = req.body;

    // Lógica de validação do endereço
    if (!endereco || endereco.length < 10) {
      return res.status(400).json({ erro: 'Endereço inválido' });
    }

    // Supondo que a validação foi bem-sucedida
    return res.status(200).json({ mensagem: 'Endereço válido' });
  }

  // Lista áreas e regiões atendidas
  listar_locais_suportados(req, res) {
    const locaisSuportados = [
      'São Paulo',
      'Rio de Janeiro',
      'Belo Horizonte',
      'Curitiba',
      'Porto Alegre'
    ];

    return res.status(200).json(locaisSuportados);
  }
}

module.exports = new ValidacaoEnderecoControlador();