const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("504709446673367043")
setInterval(function() {
channel.send(`salemsalemsalemsalemsalemsalemsalemsalemsalem`);
}, 30)
})

client.login(process.env.BOT_TOKEN);