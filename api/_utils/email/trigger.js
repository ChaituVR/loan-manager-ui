require('dotenv').config()
var axios = require('axios');

console.log('Successfully Started Email Trigger')
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
    console.log('Successfully send Email');
    console.log(body);
  });

}

if(process.env.SENDGRID_TOKEN){
  sendEmail();
} else {
  console.log('No SENDGRID_TOKEN to trigger emails');
}