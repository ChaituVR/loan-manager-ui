const express = require('express');
const server = require('./_utils/apolloServer');

const app = express();
server.applyMiddleware({ app });
server.applyMiddleware({app, path: '/', cors: true});
server.applyMiddleware({app, path: '/api/', cors: true});

module.exports = app;