
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "emoji")) {
    let emote = message.content.split(" ");
    if(emote[1]) {
      message.channel.send({files: [
        {
          attachment: `https://cdn.discordapp.com/emojis/${message.content.split(' ').pop().replace(/\D+/g,'')}.png`,
          name: `${message.content.split(' ').pop().replace(/\D+/g,'')}.png`
        }
      ]});
    } else if(message.guild.emojis.find('name', `${message.content.split(' ').pop().replace(/[<>:\d]/g,'')}`)) {
      message.channel.send({files: [
        {
          attachment: message.guild.emojis.find('name', `${message.content.split(' ').pop().replace(/[<>:\d]/g,'')}`).url,
          name: `${message.guild.emojis.find('name', `${message.content.split(' ').pop().replace(/[<>:\d]/g,'')}`).url.split('/').pop()}`
        }
      ]});
    } else {
      message.channel.send("Invalid emoji, please choose a custom emoji.");
    }

  }
}




module.exports.help = {
  name: 'emoji'
}
