class AddressValidationController {
  // Valida o formato e a viabilidade do endereço inserido
  validate_address(req, res) {
    const { address } = req.body;

    // Lógica de validação do endereço
    if (!address || address.length < 10) {
      return res.status(400).json({ error: 'Endereço inválido' });
    }

    // Supondo que a validação foi bem-sucedida
    return res.status(200).json({ message: 'Endereço válido' });
  }

  // Lista áreas e regiões atendidas
  list_supported_locations(req, res) {
    const supportedLocations = [
      'São Paulo',
      'Rio de Janeiro',
      'Belo Horizonte',
      'Curitiba',
      'Porto Alegre'
    ];

    return res.status(200).json(supportedLocations);
  }
}

module.exports = new AddressValidationController();