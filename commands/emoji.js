
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "emoji")) {
    let arg = message.content.split(' ');
    if(message.guild.emojis.find('id', `${arg[1].replace(/:\w+:/g,'')}`)) {
      message.channel.send({files: [
        {
          attachment: message.guild.emojis.find('id', `${arg[1].replace(/:\w+:/g,'')}`).url,
          name: `${message.guild.emojis.find('id', `${arg[1].replace(/:\w+:/g,'')}`).url.split('/').pop()}`
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
