const config = require('./config.json');
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.member.hasPermission("BAN_MEMBERS")) {
    if (message.content.startsWith(config.prefix + "unban")) {
      if(message.content.slice(7)) {
        message.mentions.users.map(user => {
          message.guild.member(user).unban(user)
        });
      } else {
        message.channel.send('Who am I unbanning?');
      }
    }


  }
  else{
    message.channel.send("You Have Not Brushed Your Teeth!");
  }
}

module.exports.help = {
  name: 'unban'
}
