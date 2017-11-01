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
        client.user.setPresence({
          game: {
            name:'with Toothbrush | [help',
            type: 0
          }
        });
      } else {
        client.user.setPresence({
          game: {
            name: `${game} | [help`,
            type: 0
          }
        });
      }

    }
  } else {
    message.channel.send("You are not the Brush");
  }
}

module.exports.help = {
  name: 'setgame'
}
