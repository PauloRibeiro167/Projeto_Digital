class ProdutoController {
    constructor() {
        this.produtos = [];
    }

    // Lista todos os produtos
    listar_produtos() {
        if (this.produtos.length === 0) {
            console.log("Nenhum produto disponível.");
            return;
        }
        console.log("Produtos disponíveis:");
        this.produtos.forEach(produto => {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}`);
        });
    }

    // Mostra detalhes de um produto específico
    mostrar_produto(produtoId) {
        const produto = this.produtos.find(p => p.id === produtoId);
        if (produto) {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}, Descrição: ${produto.descricao}`);
        } else {
            console.log(`Produto com id ${produtoId} não encontrado.`);
        }
    }

    // Filtra produtos por categoria
    filtrar_por_categoria(categoria) {
        const produtosFiltrados = this.produtos.filter(p => p.categoria === categoria);
        if (produtosFiltrados.length === 0) {
            console.log(`Nenhum produto encontrado na categoria ${categoria}.`);
            return;
        }
        console.log(`Produtos na categoria ${categoria}:`);
        produtosFiltrados.forEach(produto => {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}`);
        });
    }
}

// Exemplo de uso
const controladorProduto = new ControladorProduto();
controladorProduto.produtos = [
    { id: 1, nome: 'Produto 1', categoria: 'Categoria 1', descricao: 'Descrição do Produto 1' },
    { id: 2, nome: 'Produto 2', categoria: 'Categoria 2', descricao: 'Descrição do Produto 2' },
    { id: 3, nome: 'Produto 3', categoria: 'Categoria 1', descricao: 'Descrição do Produto 3' }
];

controladorProduto.listar_produtos();
controladorProduto.mostrar_produto(1);
controladorProduto.filtrar_por_categoria('Categoria 1');