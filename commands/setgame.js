const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    let array = message.content.split(" ");
    let game = array[1];
    let type = array[2];
    if(!game) {
      message.channel.send('What Game?');
    } else if(game === "default") {
      client.user.setActivity('with Toothbrush | [help');
    } else if(game && !type) {
      client.user.setActivity(`${game} | [help`);
    } else if(game && type) {
      client.user.setActivity(`${game} | [help`, {
        options: {
          type: `${type.toUpperCase()}`
        }
      });
    }
  } else {
    message.channel.send("You are not the Brush");
  }
}

module.exports.help = {
  name: 'setgame'
}
