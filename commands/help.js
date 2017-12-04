
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  let total = message.content.split(" ");
  let command = total.slice(1);
  if(command.length === 0) {
    message.channel.send("Commands: " + cmds.cmd + " <[help COMMAND_NAME for explanation>", {code: 'js'});
  } else if(command.length !== 0) {
    message.channel.send(`${cmds[command]}`, {code: 'js'});
  }
}

module.exports.help = {
  name: 'help'
}
