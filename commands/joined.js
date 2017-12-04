
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  message.channel.send(`${message.member.joinedAt}`);  
}

module.exports.help = {
  name: 'joined'
}
