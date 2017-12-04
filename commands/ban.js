
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.member.hasPermission("BAN_MEMBERS")) {
    if(message.content.slice(5)) {
      message.mentions.users.map(user => {
        message.guild.member(user).ban()
      });
    } else {
      message.channel.send('Who am I banning?');
    }
  } else {
    message.channel.send("You Have Not Brushed Your Teeth!");
  }
}

module.exports.help = {
  name: 'ban'
}
