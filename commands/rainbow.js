const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    if (message.content.startsWith(process.env.PREFIX + "rainbow")) {
      let arg = message.content.slice(9);
      var timeout;
      if(arg != 'off') {
        let rolename = message.member.guild.roles.find('name', arg);
        if(rolename) {
            function change() {
                rolename.setColor('RANDOM');
                timeout = setTimeout(function color(){rolename.setColor('RANDOM'); change();}, 60000);
            }
            change();
        } else {
          message.channel.send("What role?");
        }

      } else if (arg == 'off') {
        clearTimeout(timeout);
        message.channel.send('Rainbow off');
      }
    } else {
      message.channel.send("You are not the Brush");
    }
  }
}

module.exports.help = {
  name: 'rainbow'
}
