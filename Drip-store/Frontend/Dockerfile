FROM node:16-alpine AS builder

WORKDIR /workspace/web

COPY Package.json /workspace/Projeto_Digital/Drip-store/Frontend/Package.json
COPY yarn.lock /workspace/Projeto_Digital/Drip-store/Frontend/yarn.lock

RUN yarn install

COPY . /workspace/Projeto_Digital/Drip-store/Frontend

CMD ["yarn", "start"]