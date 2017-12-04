
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  if(message.member.hasPermission("KICK_MEMBERS")) {
      if(message.content.slice(6)) {
        message.mentions.users.map(user => {
          message.guild.member(user).kick()
        });
      } else {
        message.channel.send('Who am I kicking?');
      }
  } else {
    message.channel.send("You Have Not Brushed Your Teeth!");
  }
}

module.exports.help = {
  name: 'kick'
}
