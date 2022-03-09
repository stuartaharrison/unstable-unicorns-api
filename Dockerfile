FROM node:16

WORKDIR /app

# copy everything we care about across
COPY package*.json ./
COPY . .

# install the server-side packages
RUN npm install

# running the server will expose & run the react-client too!
EXPOSE 4000
CMD ["node", "server.js"]