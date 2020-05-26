const express = require('express');
const MongoClient = require('mongodb').MongoClient;

let client;
try {
  // Connect to the db
  client = new MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  client.connect();
} catch(error){
  console.log('There is an Error Connecting to DB' + error);
} 
console.log('Successfully Connected to MongoDB')
const db = client.db();

const server = require('./_utils/apolloServer')(db);

const app = express();
server.applyMiddleware({ app });
server.applyMiddleware({app, path: '/', cors: true});
server.applyMiddleware({app, path: '/api/', cors: true});

module.exports = app;