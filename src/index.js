const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const jobs = require('./utils/jobs.js');
const app = express();
const ticketController = require('./controllers/ticket-controller.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/api/v1/tickets', ticketController.create);

    const setupAndStartServer = ()=>{
    app.listen(PORT , () => {
        console.log(`Reminder Service is running on port ${PORT}`);
        jobs()
    });

}
setupAndStartServer()