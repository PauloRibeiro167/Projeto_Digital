// Importar os módulos necessários
const User = require('../models/User');
const Order = require('../models/Order');

const UserController = {
  // Função para exibir o perfil do usuário
  show: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao exibir perfil do usuário', error });
    }
  },

  // Função para atualizar os dados do usuário
  update: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar dados do usuário', error });
    }
  },

  // Função para desativar ou excluir a conta do usuário
  delete: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.json({ message: 'Conta de usuário desativada/excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao desativar/excluir conta de usuário', error });
    }
  },

  // Função para exibir o histórico de pedidos do usuário
  order_history: async (req, res) => {
    try {
      const userId = req.params.id;
      const orders = await Order.find({ userId });
      if (!orders) {
        return res.status(404).json({ message: 'Histórico de pedidos não encontrado' });
      }
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao exibir histórico de pedidos', error });
    }
  }
};

// Exportar o controlador
module.exports = UserController;