const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    let array = message.content.split(" ");
    let type = ["PLAYING", "STREAMING", "LISTENING", "WATCHING"];
    let game = array.filter(e => !type.includes(e)).toString().replace(/,/g, '');
    if(!game) {
      message.channel.send('What Game?');
    } else if(game === "default") {
      client.user.setActivity('with Toothbrush | [help');
    } else if(game && array.find(item => { return type[item]; } ) == undefined) {
      client.user.setActivity(`${game} | [help`);
    } else if(game && array.find(item => { return type[item]; } ) != undefined) {
      let act = array.find(value => {
        return type[type.indexOf(value)];
      });
      client.user.setActivity(`${game} | [help`,
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
