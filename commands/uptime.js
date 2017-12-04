
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  message.channel.send(`***${Math.floor(process.uptime() / (60* 60))}***h **${Math.floor(process.uptime() % (60 * 60) / 60)}**m *${Math.floor(process.uptime() % 60)}*s`);
}



module.exports.help = {
  name: 'uptime'
}
