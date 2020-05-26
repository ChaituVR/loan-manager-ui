const { ApolloServer } = require('apollo-server-express');

const server = (db) => {
  const typeDefs = require('./schema');
  const resolvers = require('./resolvers')(db);
  const apolloServerNew = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });
  return apolloServerNew;
}

module.exports = server