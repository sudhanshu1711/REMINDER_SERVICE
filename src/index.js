const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');

const app = express();

//const {sendBasicEmail}= require('./services/email-service.js')

    const setupAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.listen(PORT , () => {
        console.log(`Reminder Service is running on port ${PORT}`);

    //    sendBasicEmail('coding1711@gmail.com',
      //      'sudhanshu2679@gmail.com',
        //    'This is a test email',
          //  'This is a test email body'
        //)
    });

}
setupAndStartServer()