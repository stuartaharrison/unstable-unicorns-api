const cors = require('cors');
const http = require('http');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer  } = require('apollo-server-core');
const { resolvers } = require('./graphql/resolvers');
const { typeDefs } = require('./graphql/schema');

const app = express();
app.use(cors());
app.use('/images', express.static('static/images'));

const httpServer = http.createServer(app);
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

apolloServer.start().then(_ => {
    // apply the GraphQL middleware layer that will enable the Apollo Server
    apolloServer.applyMiddleware({ app });
    // listen on the server side
    httpServer.listen(4000, () => {
        console.log(`🚀  Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
    });
});