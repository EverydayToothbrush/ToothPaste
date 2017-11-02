const fs = require("fs");
const cmds = require('./cmds.json');

module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    if (message.content.startsWith(process.env.PREFIX + "rainbow")) {
      let r = randomize();
      let g = randomize();
      let b = randomize();
      let color = [r, g, b];
      let arg = message.content.slice(9);
      if(arg != 'off') {
        let rolename = message.member.guild.roles.find('name', arg);
        function change(){
          setInterval(function(){rolename.setColor(color)}, 60000);
        }
        if(rolename) {
          while(1 == 1){
            change();
          }
        } else {
          return;
        }
        if (arg == 'off'){
          clearInterval(change());
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
