FROM node:14

WORKDIR /app

COPY ../Frontend/package.json ../Frontend/yarn.lock ./
RUN yarn install


CMD ["npm", "start"]