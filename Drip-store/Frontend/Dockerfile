# Use uma imagem base do Node para construir o frontend
FROM node:18-alpine as build

WORKDIR /app

# Copie os arquivos package.json e yarn.lock
COPY Frontend/package.json Frontend/yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie o restante dos arquivos do frontend
COPY Frontend .

# Build do frontend
RUN yarn build

# Use uma imagem base do Nginx para servir o frontend
FROM nginx:alpine

# Copie os arquivos buildados para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80 para acessar o frontend
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]