// Importar os módulos necessários
const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');

const AdminController = {
  // Função para listar todas as ações administrativas disponíveis
  index: (req, res) => {
    const actions = [
      'Gerenciar Usuários',
      'Gerenciar Pedidos',
      'Gerenciar Produtos'
    ];
    res.json(actions);
  },

  // Função para gerenciar informações e permissões dos usuários
  manage_users: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao gerenciar usuários', error });
    }
  },

  // Função para gerenciar todos os pedidos e seu status
  manage_orders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao gerenciar pedidos', error });
    }
  },

  manage_products: async (req, res) => {
    try {
      const { action, productId, productData } = req.body;

      if (action === 'add') {
        const newProduct = new Product(productData);
        await newProduct.save();
        res.json({ message: 'Produto adicionado com sucesso', product: newProduct });
      } else if (action === 'edit') {
        const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.json({ message: 'Produto atualizado com sucesso', product: updatedProduct });
      } else if (action === 'delete') {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.json({ message: 'Produto excluído com sucesso' });
      } else {
        res.status(400).json({ message: 'Ação inválida' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao gerenciar produtos', error });
    }
  }
};

module.exports = AdminController;