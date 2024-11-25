Guia para Iniciar a Aplicação
Este guia apresenta um passo a passo simples para iniciar a aplicação, incluindo frontend e backend, utilizando Docker.

Pré-requisitos
Docker instalado.
Docker Compose instalado.
Estrutura do Projeto
docker-compose.dev.yml: Arquivo de configuração do Docker Compose para o ambiente de desenvolvimento.
Dockerfile.frontend: Arquivo Dockerfile para construir a imagem do frontend.
Dockerfile.backend: Arquivo Dockerfile para construir a imagem do backend.
init.sql: Script SQL para inicializar o banco de dados.
create_user.sql: Script SQL para criar um usuário no banco de dados.
Iniciando a Aplicação
1. Acesse o Diretório do Projeto
Abra um terminal e navegue até o diretório que contém o arquivo docker-compose.dev.yml:

sh
Copiar código
cd Docker
2. Construa as Imagens Docker
Execute o comando abaixo para construir as imagens do frontend e backend:

sh
Copiar código
docker-compose -f docker-compose.dev.yml build
3. Inicie os Contêineres
Após a construção das imagens, inicie os contêineres com o comando:

sh
Copiar código
docker-compose -f docker-compose.dev.yml up
Esse comando inicializará os serviços de frontend, backend e banco de dados, conforme definido no arquivo docker-compose.dev.yml.

4. Verifique os Contêineres em Execução
Para confirmar que os contêineres estão rodando, utilize:

sh
Copiar código
docker ps
5. Acesse os Serviços
Frontend: Abra no navegador o endereço:
http://localhost:<porta_do_frontend>
(Substitua <porta_do_frontend> pela porta configurada no arquivo Docker Compose.)

Backend: Acesse via navegador ou um cliente de API (como Postman):
http://localhost:<porta_do_backend>
(Substitua <porta_do_backend> pela porta configurada no arquivo Docker Compose.)

Comandos Úteis
Parar os Contêineres
Para parar os contêineres em execução:

sh
Copiar código
docker-compose -f docker-compose.dev.yml down
Reiniciar os Contêineres
Se precisar reiniciar os contêineres após alterações no código ou na configuração, execute:

sh
Copiar código
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build
Limpar o Cache do Docker
Para liberar espaço em disco, removendo imagens, contêineres e volumes não utilizados, utilize:

sh
Copiar código
docker system prune -a
Atenção: Este comando remove:

Contêineres parados.
Redes não utilizadas.
Imagens sem contêineres associados.
Todo o cache de construção.
Com isso, sua aplicação estará pronta para uso! 🎉