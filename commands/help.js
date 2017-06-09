const config = require('./config.json');
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("Commands: " + cmds.cmd, {code: 'js'});

  }
}

module.exports.help = {
  name: 'help'
}
