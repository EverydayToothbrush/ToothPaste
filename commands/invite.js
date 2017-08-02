
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "invite")) {
    client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD']);
  }
}



module.exports.help = {
  name: 'say'
}
