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

# Use uma imagem base do Nginx para servir o backend
FROM nginx:alpine

# Copie os arquivos buildados para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta 80 para acessar o backend
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]