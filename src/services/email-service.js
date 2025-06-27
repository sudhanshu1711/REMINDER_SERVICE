const sender = require('../config/emailConfig.js');
const TicketRepo = require('../repository/ticket-repo.js');

const repo = new TicketRepo();

const sendBasicEmail = (from,to,mailSubject,mailBody)=>{
    sender.sendMail({
        from:from,
        to:to,
        subject: mailSubject,
        text: mailBody
    })
}
const fetchPendingEmails = async()=>{
    try {
       const now = new Date();
      const istNow = new Date(now.getTime() + 5.5 * 60 * 60 * 1000); 
    const response = await repo.get({
    status: 'PENDING',
       time: istNow
         });
       return response
    } catch (error) {
     console.log(error)   
    }
}
   const updateTicket = async(id,status)=>{
      try {
        const response = await repo.update(id,status)
      } catch (error) {
          console.log(error);
      }
   }
const createNotification = async (data)=>{
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {sendBasicEmail,fetchPendingEmails,createNotification,updateTicket}