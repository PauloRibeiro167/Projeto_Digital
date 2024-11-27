// Importar os módulos necessários
const Usuario = require('../models/User');
const Pedido = require('../models/Order');
const Produto = require('../models/Product');

const AdminControlador = {
  // Função para listar todas as ações administrativas disponíveis
  indice: (req, res) => {
    const acoes = [
      'Gerenciar Usuários',
      'Gerenciar Pedidos',
      'Gerenciar Produtos'
    ];
    res.json(acoes);
  },

  // Função para gerenciar informações e permissões dos usuários
  gerenciar_usuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao gerenciar usuários', erro });
    }
  },

  // Função para gerenciar todos os pedidos e seu status
  gerenciar_pedidos: async (req, res) => {
    try {
      const pedidos = await Pedido.find();
      res.json(pedidos);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao gerenciar pedidos', erro });
    }
  },

  // Função para gerenciar produtos
  gerenciar_produtos: async (req, res) => {
    try {
      const { acao, idProduto, dadosProduto } = req.body;

      if (acao === 'adicionar') {
        const novoProduto = new Produto(dadosProduto);
        await novoProduto.save();
        res.json({ mensagem: 'Produto adicionado com sucesso', produto: novoProduto });
      } else if (acao === 'editar') {
        const produtoAtualizado = await Produto.findByIdAndUpdate(idProduto, dadosProduto, { new: true });
        if (!produtoAtualizado) {
          return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.json({ mensagem: 'Produto atualizado com sucesso', produto: produtoAtualizado });
      } else if (acao === 'excluir') {
        const produtoExcluido = await Produto.findByIdAndDelete(idProduto);
        if (!produtoExcluido) {
          return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.json({ mensagem: 'Produto excluído com sucesso' });
      } else {
        res.status(400).json({ mensagem: 'Ação inválida' });
      }
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao gerenciar produtos', erro });
    }
  }
};

module.exports = AdminControlador;