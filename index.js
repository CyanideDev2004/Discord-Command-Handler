const { Client , Discord ,  Collection} = require('discord.js')
const client = new Client({
    disableEveryone : true
})
const fs = require('fs')
const config = require('./config.json')
const prefix = config.prefix
const token = config.token

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
})
client.on('ready' , () => {
    console.log(`${client.user.username}  ✅`)
    client.user.setActivity({type:`WATCHING` , name: `for ${prefix}help` })
})

client.on('message' , async message => {
    if(message.author.bot) return
    if(!message.content.startsWith(prefix)) return
    if(!message.guild) return
    if(!message.member)  message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd))
    if(command) command.run(client , message , args) 
})

client.login(token)

