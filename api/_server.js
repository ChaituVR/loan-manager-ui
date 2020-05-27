require('dotenv').config()
const app = require('./graphql');

const port = process.env.PORT || 8080;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}/api/graphql`)
);