const config = require('./config.json');
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "avatar")) {
    message.channel.send({files: [
      {
        attachment: message.author.displayAvatarURL,
        name: 'avatar.png'
      }
    ]});
  }
}

module.exports.help = {
  name: 'avatar'
}
