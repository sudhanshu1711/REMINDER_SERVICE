const sender = require('../config/emailConfig.js');

const sendBasicEmail = (from,to,mailSubject,mailBody)=>{
    sender.sendMail({
        from:from,
        to:to,
        subject: mailSubject,
        text: mailBody
    })
}

module.exports = {sendBasicEmail}