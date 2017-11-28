
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(process.env.PREFIX + "avatar")) {
    if(message.content.slice(8)){
      message.mentions.users.map(user => {
        message.channel.send({files: [
          {
            attachment: user.displayAvatarURL,
            name: `${user.displayAvatarURL.split('/').pop().replace(/[?]size=\d+/g,'')}`
          }
        ]});
      });
    } else {
      message.channel.send({files: [
        {
          attachment: message.author.displayAvatarURL,
          name: `${message.author.displayAvatarURL.split('/').pop().replace(/[?]size=\d+/g,'')}`
        }
      ]});
    }
  }
}

module.exports.help = {
  name: 'avatar'
}
