const app = require('./graphql');

app.listen(
    {port : 4000},
    () => console.log('🚀 Server ready at http://localhost:4000/api/graphql'));