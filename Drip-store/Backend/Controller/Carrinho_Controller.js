class CarrinhoControlador {
  constructor() {
    this.carrinho = [];
  }

  // Adiciona um produto ao carrinho
  adicionar_ao_carrinho(produto) {
    this.carrinho.push(produto);
    console.log(`${produto.nome} foi adicionado ao carrinho.`);
  }

  // Remove um produto do carrinho
  remover_do_carrinho(idProduto) {
    this.carrinho = this.carrinho.filter(produto => produto.id !== idProduto);
    console.log(`Produto com id ${idProduto} foi removido do carrinho.`);
  }

  // Finaliza a compra
  finalizar_compra() {
    if (this.carrinho.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }
    console.log("Compra finalizada com sucesso!");
    this.carrinho = []; // Limpa o carrinho após o checkout
  }
}

// Exemplo de uso
const carrinhoControlador = new CarrinhoControlador();
carrinhoControlador.adicionar_ao_carrinho({ id: 1, nome: 'Produto 1' });
carrinhoControlador.adicionar_ao_carrinho({ id: 2, nome: 'Produto 2' });

carrinhoControlador.remover_do_carrinho(1);
carrinhoControlador.finalizar_compra();