// Importar os módulos necessários
const nodemailer = require('nodemailer');

// Configurar o serviço de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu-email@gmail.com',
    pass: 'sua-senha'
  }
});

const EmailController = {
  // Função para enviar um e-mail de boas-vindas para novos usuários
  send_welcome_email: (req, res) => {
    const { email, name } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Bem-vindo à nossa loja!',
      text: `Olá ${name},\n\nBem-vindo à nossa loja! Estamos felizes em tê-lo conosco.\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar e-mail de boas-vindas', error });
      }
      res.json({ message: 'E-mail de boas-vindas enviado com sucesso', info });
    });
  },

  // Função para enviar confirmações de pedido para usuários
  send_order_confirmation: (req, res) => {
    const { email, orderId } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Confirmação de Pedido',
      text: `Olá,\n\nSeu pedido ${orderId} foi confirmado com sucesso.\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar confirmação de pedido', error });
      }
      res.json({ message: 'Confirmação de pedido enviada com sucesso', info });
    });
  },

  // Função para enviar atualizações de envio e entrega
  send_shipping_update: (req, res) => {
    const { email, trackingNumber } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Atualização de Envio',
      text: `Olá,\n\nSeu pedido foi enviado. O número de rastreamento é ${trackingNumber}.\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar atualização de envio', error });
      }
      res.json({ message: 'Atualização de envio enviada com sucesso', info });
    });
  },

  // Função para enviar e-mails de redefinição de senha
  send_password_reset: (req, res) => {
    const { email, resetLink } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Redefinição de Senha',
      text: `Olá,\n\nClique no link a seguir para redefinir sua senha: ${resetLink}\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar e-mail de redefinição de senha', error });
      }
      res.json({ message: 'E-mail de redefinição de senha enviado com sucesso', info });
    });
  }
};

// Exportar o controlador
module.exports = EmailController;