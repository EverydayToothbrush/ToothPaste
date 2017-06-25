
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.member.hasPermission("BAN_MEMBERS")) {
    if (message.content.startsWith(process.env.PREFIX + "unban")) {
      if(message.content.slice(7)) {
        let user = message.content.slice(7);
        message.guild.unban(`${user}`);
        message.channel.send('It has been done');
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
