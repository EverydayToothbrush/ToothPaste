
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "emoji")) {
    if(message.guild.emojis.find('name', `${message.content.split(' ').pop().replace(/[<>:\d]/g,'')}`)) {
      message.channel.send({files: [
        {
          attachment: message.guild.emojis.find('name', `${message.content.split(' ').pop().replace(/[<>:\d]/g,'')}`).url,
          name: `${message.guild.emojis.find('name', `${message.content.split(' ').pop().replace(/[<>:\d]/g,'')}`).url.split('/').pop()}`
        }
      ]});
    } else {
      console.log(message.content);
      message.channel.send("Which one are you looking for?");
    }

  }
}




module.exports.help = {
  name: 'emoji'
}
