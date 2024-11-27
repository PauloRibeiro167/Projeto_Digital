class AvaliaçãoControlador {
  constructor() {
    this.avaliações = [];
  }

  // Cria uma nova avaliação
  criar_avaliação(avaliação) {
    this.avaliações.push(avaliação);
    console.log(`Avaliação criada: ${JSON.stringify(avaliação)}`);
  }

  // Atualiza uma avaliação existente
  atualizar_avaliação(idAvaliação, novosDados) {
    const avaliação = this.avaliações.find(a => a.id === idAvaliação);
    if (avaliação) {
      Object.assign(avaliação, novosDados);
      console.log(`Avaliação com id ${idAvaliação} foi atualizada.`);
    } else {
      console.log(`Avaliação com id ${idAvaliação} não encontrada.`);
    }
  }

  // Deleta uma avaliação
  deletar_avaliação(idAvaliação) {
    const comprimentoInicial = this.avaliações.length;
    this.avaliações = this.avaliações.filter(a => a.id !== idAvaliação);
    if (this.avaliações.length < comprimentoInicial) {
      console.log(`Avaliação com id ${idAvaliação} foi deletada.`);
    } else {
      console.log(`Avaliação com id ${idAvaliação} não encontrada.`);
    }
  }
}

// Exemplo de uso
const avaliaçãoControlador = new AvaliaçãoControlador();
avaliaçãoControlador.criar_avaliação({ id: 1, idProduto: 101, conteúdo: 'Ótimo produto!', nota: 5 });
avaliaçãoControlador.criar_avaliação({ id: 2, idProduto: 102, conteúdo: 'Não gostei muito.', nota: 2 });
avaliaçãoControlador.atualizar_avaliação(1, { conteúdo: 'Produto excelente!', nota: 5 });
avaliaçãoControlador.deletar_avaliação(2);