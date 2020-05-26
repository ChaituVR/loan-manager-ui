const express = require('express');
var axios = require('axios');
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

function sendEmail() {
  var options = { 
    method: 'POST',
    url: 'https://api.sendgrid.com/v3/mail/send',
    headers: { 'postman-token': 'b2def12b-b7c1-576f-996c-8afa038fd3c6',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.SENDGRID_TOKEN 
    },
    data: { personalizations: [ { to: [ { email: 'yourchaitu@gmail.com' } ] } ],
      from: { email: 'test@example.com' },
      reply_to: { email: 'noreply@johndoe.com', name: 'John Doe' },
      template_id: 'd-960412d388f24e2d8dcab70f0510c945' 
    },
    responseType: 'json'
  };

  axios(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

}

if(process.env.SENDGRID_TOKEN){
  sendEmail();
  setInterval(sendEmail, 1000 * 60 * 60);
}

const app = express();
server.applyMiddleware({ app });
server.applyMiddleware({app, path: '/', cors: true});
server.applyMiddleware({app, path: '/api/', cors: true});

module.exports = app;