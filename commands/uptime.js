const config = require('./config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(config.prefix + "uptime")) {
    message.channel.send(`***${Math.floor(process.uptime() / 60)}***m **${Math.floor(process.uptime() % 60)}**s`);
  }

}



module.exports.help = {
  name: 'uptime'
}
