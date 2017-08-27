const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    if (message.content.startsWith(process.env.PREFIX + "setgame")) {
      let game = message.content.slice(9);
      if(!game) {
        message.channel.send('What Game?');
      } else if(game === "default") {
        client.user.setGame('with Toothbrush | [help');
      } else {
        client.user.setGame(`${game} | [help`);
      }

    }
  } else {
    message.channel.send("You are not the Brush");
  }
}

module.exports.help = {
  name: 'setgame'
}
