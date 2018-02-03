const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    let array = message.content.split(" ");
    let type = ["PLAYING", "STREAMING", "LISTENING", "WATCHING"];
    let game = array.slice(1).toString().replace(/,/g, ' ');
    let actualgame = game.replace(/\b(WATCHING|STREAMING|LISTENING|PLAYING)/g, '')
    if(!game) {
      message.channel.send('What Game?');
    } else if(actualgame === "default") {
      client.user.setActivity('with Toothbrush | [help');
    } else if(game && array.find(item => { return type.indexOf(item); } ) == -1) {
      client.user.setActivity(`${actualgame} | [help`);
    } else if(game && array.find(item => { return type.indexOf(item); } ) != -1) {
      let act = array.find(value => {
        return type[type.indexOf(value)];
      });
      client.user.setActivity(`${actualgame} | [help`,
        {
          type: `${type[act]}`
        });
    }
  } else {
    message.channel.send("You are not the Brush");
  }
}

module.exports.help = {
  name: 'setgame'
}
