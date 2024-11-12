# Use uma imagem base do Node para construir e rodar o frontend
FROM node:18-alpine

WORKDIR /app

# Copie os arquivos package.json e yarn.lock
COPY Frontend/package.json Frontend/yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie o restante dos arquivos do frontend
COPY Frontend .

# Exponha a porta que o webpack-dev-server usa
EXPOSE 3000

# Comando para rodar o webpack-dev-server
CMD ["yarn", "run", "dev"]