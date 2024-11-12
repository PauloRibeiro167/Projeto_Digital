# Use uma imagem base do Node para construir o backend
FROM node:18-alpine as build

WORKDIR /app

# Copie os arquivos package.json e yarn.lock
COPY Backend/package.json Backend/yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie o restante dos arquivos do backend
COPY Backend .

# Build do backend
RUN yarn build

# Exponha a porta que o backend usa
EXPOSE 3000

# Comando para rodar o backend
CMD ["yarn", "start"]