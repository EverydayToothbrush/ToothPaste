const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    let arg = message.content.slice(9);  
    let rolename = message.member.guild.roles.find('name', arg);
    if(rolename) {
      rolename.setColor('RANDOM');
      //timeout = setInterval(function color(){rolename.setColor('RANDOM')}, 36000000);
    } else {
      message.channel.send("What role?");
    }
    /* if(arg != 'off') {

    }
    if (arg == 'off') {
      clearInterval(timeout);
      message.channel.send('Rainbow off');
    } */
  } else {
    message.channel.send("You are not the Brush");
  }
}

module.exports.help = {
  name: 'rainbow'
}
