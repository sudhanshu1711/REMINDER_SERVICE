const {NotificationTicket} = require('../models/index.js'); 
const {Op} = require('sequelize'); 

class TicketRepo{
     async getAll(){
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
     }
     async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error
        }
     }
     async get(filter){
        try {
            const ticket = await NotificationTicket.findAll({
                where:{
                    status: filter.status,
                    notificationTime:{
                        [Op.lte]: filter.time|| new Date()
                    }
                }
            })
            return ticket;
        } catch (error) {
            throw error;
        }
     }
     async update(id,status){
        try {
            const ticket = await NotificationTicket.findByPk(id)
            if(status)
            ticket.status = status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error
        }
     }
}

module.exports = TicketRepo