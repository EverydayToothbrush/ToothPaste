
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  client.generateInvite(['ADMINISTRATOR', 'SEND_MESSAGES', 'MANAGE_GUILD'])
    .then(link => {
      message.channel.send(`Bot invite link: ${link}`);
    });
}



module.exports.help = {
  name: 'invite'
}
