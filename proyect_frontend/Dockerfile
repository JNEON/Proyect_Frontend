FROM node:16.13-alpine as node

LABEL author = "Jason Ariza"

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=node /app/dist/proyect_frontend /usr/share/nginx/html