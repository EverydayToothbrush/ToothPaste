const config = require('./config.json');
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(process.env.PREFIX + "joined")) {
    message.channel.send(`${message.member.joinedAt}`);

  }
}

module.exports.help = {
  name: 'joined'
}
