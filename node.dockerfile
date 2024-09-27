# Usar a imagem base do Ubuntu mais recente
FROM node:22-alpine

RUN npm install -g @angular/cli@18
RUN apk add git