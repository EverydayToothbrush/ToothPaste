const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    let arraymsg = message.content.split(" ");
    let type = ["PLAYING", "STREAMING", "LISTENING", "WATCHING"];
    let game = arraymsg.slice(1).join().toString().replace(/,/g, ' ');
    let actualgame = game.replace(/\b(WATCHING|STREAMING|LISTENING|PLAYING)/g, '');
    if(!game) {
      message.channel.send('What Game?');
    } else if(actualgame === "default") {
      client.user.setActivity('with Toothbrush | [help');
    } else if(game && (arraymsg.find(item => { return type[type.indexOf(item)]; } ) == undefined)) {
      client.user.setActivity(`${actualgame} | [help`);
    } else if(game && (arraymsg.find(item => { return type[type.indexOf(item)]; } ) != undefined)) {
      let act = arraymsg.find(value => {
        return type[type.indexOf(value)];
      });
      client.user.setActivity(`${actualgame} | [help`,
        {
          type: `${act}`
        });
    }
  } else {
    message.channel.send("You are not the Brush");
  }
}

module.exports.help = {
  name: 'setgame'
}
