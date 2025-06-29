const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const jobs = require('./utils/jobs.js');
const {createChannel,subscribeMessage} = require('./utils/messagequeue.js')
const {REMINDER_BINDING_KEY} = require('./config/serverConfig.js');
const app = express();
const ticketController = require('./controllers/ticket-controller.js');
const EmailService = require('./services/email-service.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/api/v1/tickets', ticketController.create);

    const setupAndStartServer = async()=>{
        const channel = await createChannel();
        subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY)
        app.listen(PORT , () => {
        console.log(`Reminder Service is running on port ${PORT}`);
       // jobs()
    });

}
setupAndStartServer()