const fs = require("fs");
const cmds = require('./cmds.json');

module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    if (message.content.startsWith(process.env.PREFIX + "rainbow")) {
      let arg = message.content.slice(9);
      if(arg != 'off') {
        let rolename = message.member.guild.roles.find('name', arg);
        function change(){
          setInterval(function color(){rolename.setColor('RANDOM')}, 60000);
        }
        if(rolename) {
            var interval = change();
            change();
        } else if (arg == 'off'){
          clearInterval(interval);
        } else {
          message.channel.send("What role?");
        }

      }
    } else {
      message.channel.send("You are not the Brush");
    }
  }
}

module.exports.help = {
  name: 'rainbow'
}

function randomize() {
  return Math.floor(Math.random() * 255) + 1;
}
