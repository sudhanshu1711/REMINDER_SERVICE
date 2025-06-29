const cron = require('node-cron');
const emailService = require('../services/email-service.js');
const sender = require('../config/emailConfig.js');

const setUpJobs = ()=>{
    cron.schedule('*/2 * * * *',async()=>{
       const response = await emailService.fetchPendingEmails();
       response.forEach((email)=>{
        sender.sendMail({
            from:'coding1711@gmail.com',
            to:email.recepientEmail,
            subject: email.subject,
            text:email.content
        },async(error,data)=>{
             if(error){
                console.log(error)
             }
             else {
                console.log(data)
                await emailService.updateTicket(email.id,'SUCCESS');
             }
        })
       })
    })
}
module.exports = setUpJobs;