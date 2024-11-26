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

const ControladorEmail = {
  // Função para enviar um e-mail de boas-vindas para novos usuários
  enviar_email_boas_vindas: (req, res) => {
    const { email, nome } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Bem-vindo à nossa loja!',
      text: `Olá ${nome},\n\nBem-vindo à nossa loja! Estamos felizes em tê-lo conosco.\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar e-mail de boas-vindas', error });
      }
      res.json({ message: 'E-mail de boas-vindas enviado com sucesso', info });
    });
  },

  // Função para enviar confirmações de pedido para usuários
  enviar_confirmacao_pedido: (req, res) => {
    const { email, pedidoId } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Confirmação de Pedido',
      text: `Olá,\n\nSeu pedido ${pedidoId} foi confirmado com sucesso.\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar confirmação de pedido', error });
      }
      res.json({ message: 'Confirmação de pedido enviada com sucesso', info });
    });
  },

  // Função para enviar atualizações de envio e entrega
  enviar_atualizacao_envio: (req, res) => {
    const { email, numeroRastreamento } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Atualização de Envio',
      text: `Olá,\n\nSeu pedido foi enviado. O número de rastreamento é ${numeroRastreamento}.\n\nAtenciosamente,\nEquipe da Loja`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Erro ao enviar atualização de envio', error });
      }
      res.json({ message: 'Atualização de envio enviada com sucesso', info });
    });
  },

  // Função para enviar e-mails de redefinição de senha
  enviar_redefinicao_senha: (req, res) => {
    const { email, linkRedefinicao } = req.body;
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: email,
      subject: 'Redefinição de Senha',
      text: `Olá,\n\nClique no link a seguir para redefinir sua senha: ${linkRedefinicao}\n\nAtenciosamente,\nEquipe da Loja`
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
module.exports = ControladorEmail;