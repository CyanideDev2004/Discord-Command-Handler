const {Client , MessageEmbed} = require('discord.js')

module.exports = {
    name:'ping' , 
    category: 'info' , 
    description : "Returns api latency" , 
    
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run : async(client , message , args) =>{
       message.channel.send()
    }
}