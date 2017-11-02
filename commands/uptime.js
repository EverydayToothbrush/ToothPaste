
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "uptime")) {
    message.channel.send(`***${Math.floor(process.uptime() % 60 / 60)}***h **${Math.floor(process.uptime() % 60)}**m *${Math.floor(process.uptime())}*s`);
  }

}



module.exports.help = {
  name: 'uptime'
}
