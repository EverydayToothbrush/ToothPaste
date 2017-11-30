
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "emoji")) {
    let arg = message.content.split(' ');
    let emoji = arg[1];
    if(message.guild.emojis.find('id', `${emoji.replace(/:\w+:/g,'')}`)) {
      message.channel.send({files: [
        {
          attachment: message.guild.emojis.find('id', `${emoji.replace(/:\w+:/g,'')}`).url,
          name: `${message.guild.emojis.find('id', `${emoji.replace(/:\w+:/g,'')}`).url.split('/').pop()}`
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
