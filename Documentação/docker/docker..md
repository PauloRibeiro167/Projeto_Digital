# Documentação de Comandos Docker

Este documento fornece uma visão geral dos comandos necessários para construir, iniciar e gerenciar os contêineres Docker para o projeto.

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Estrutura do Projeto

- `docker-compose.dev.yml`: Arquivo de configuração do Docker Compose para o ambiente de desenvolvimento.
- `Dockerfile.frontend`: Dockerfile para construir a imagem do frontend.
- `Dockerfile.backend`: Dockerfile para construir a imagem do backend.
- `init.sql`: Script SQL para inicializar o banco de dados.
- `create_user.sql`: Script SQL para criar um usuário no banco de dados.

## Comandos Docker

### Construir as Imagens Docker

Navegue até o diretório onde o arquivo `docker-compose.dev.yml` está localizado e execute o comando para construir as imagens Docker:

```sh
docker-compose -f docker-compose.dev.yml build 
```

Iniciar os Contêineres
Após construir as imagens, inicie os contêineres com o seguinte comando:

```sh
docker-compose -f docker-compose.dev.yml up
```

Este comando iniciará os serviços frontend, backend e database conforme definido no arquivo docker-compose.dev.yml.

Parar os Contêineres
Para parar os contêineres em execução, use o comando:


```sh
docker-compose -f docker-compose.dev.yml down
```

Reiniciar os Contêineres
Se você precisar reiniciar os contêineres após fazer alterações na configuração ou no código, use os comandos:

```sh
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build
```

Limpar o Cache do Docker
Para liberar espaço em disco e remover imagens, contêineres e volumes não utilizados, execute:


```sh
docker system prune -a
```

Atenção: Este comando removerá todos os contêineres parados, redes não utilizadas, imagens sem contêineres associados e todo o cache de construção.