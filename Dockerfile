FROM node:16

WORKDIR /app
COPY . .
RUN npm ci

EXPOSE 4000
CMD ["node", "server.js"]