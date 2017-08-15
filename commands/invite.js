
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "invite")) {
    client.generateInvite(['ADMINISTRATOR', 'SEND_MESSAGES', 'MANAGE_GUILD'])
      .then(link => {
        message.channel.send(`Bot invite link: ${link}`);
      });
  }
}



module.exports.help = {
  name: 'invite'
}
