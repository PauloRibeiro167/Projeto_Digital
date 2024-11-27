# Drip-store

Drip-store é uma aplicação de e-commerce desenvolvida para a venda de produtos de moda, como tênis, camisetas, calças, bonés e headphones. A aplicação é composta por um frontend interativo e um backend robusto, ambos integrados para proporcionar uma experiência de compra completa e eficiente.

## Funcionalidades Principais

### Frontend
- **Catálogo de Produtos**: Exibição de produtos com detalhes como nome, preço, descrição, e imagens.
- **Filtros e Ordenação**: Ferramentas para filtrar produtos por marca, categoria e ordenar por preço.
- **Carrinho de Compras**: Adição e remoção de produtos no carrinho, com visualização de preços e descontos.
- **Autenticação de Usuários**: Login e cadastro de usuários, com diferentes níveis de acesso (usuário, admin, superadmin).
- **Página de Pagamento**: Formulário para inserção de dados de pagamento e finalização da compra.
- **Lista de Desejos**: Funcionalidade para adicionar produtos à lista de desejos.
- **Avaliações de Produtos**: Permite que os usuários façam avaliações e comentários sobre os produtos.

### Backend
- **Gerenciamento de Produtos**: Adição, edição e exclusão de produtos do catálogo.
- **Gerenciamento de Usuários**: Controle de informações e permissões dos usuários.
- **Processamento de Pagamentos**: Processamento e confirmação de pagamentos.
- **Envio de E-mails**: Envio de e-mails de boas-vindas, confirmações de pedido, atualizações de envio e redefinição de senha.
- **Rastreamento de Pedidos**: Controle e exibição do status de entrega dos pedidos.
- **Descontos e Promoções**: Aplicação e gerenciamento de cupons de desconto.

## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Bootstrap**: Biblioteca de componentes para estilização e responsividade.
- **Axios**: Cliente HTTP para comunicação com o backend.

### Backend
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Banco de dados relacional para armazenamento de dados.
- **Sequelize**: ORM para interação com o banco de dados.
- **Nodemailer**: Biblioteca para envio de e-mails.
- **Docker**: Ferramenta para criação e gerenciamento de contêineres.

## Estrutura do Projeto

- **Frontend**: Localizado no diretório `Drip-store/Frontend`, contém os componentes React, páginas, estilos e serviços.
- **Backend**: Localizado no diretório `Drip-store/Backend`, contém os controladores, modelos, rotas e scripts de inicialização do banco de dados.
- **Documentação**: Localizada no diretório `Documentação`, contém guias e instruções para desenvolvimento e uso da aplicação.

## Como Executar a Aplicação

### Pré-requisitos
- Docker e Docker Compose instalados.

### Passos
1. Navegue até o diretório do projeto:
  ```sh
  cd Drip-store
  ```
2. Construa as imagens Docker:
  ```sh
  docker-compose -f docker/docker-compose.yml build
  ```
3. Inicie os contêineres:
  ```sh
  docker-compose -f docker/docker-compose.yml up
  ```
4. Acesse os serviços:
  - Frontend: [http://localhost:<porta_do_frontend>](http://localhost:<porta_do_frontend>)
  - Backend: [http://localhost:<porta_do_backend>](http://localhost:<porta_do_backend>)

Com isso, a aplicação estará pronta para uso!
