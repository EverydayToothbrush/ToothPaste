const config = require('./config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

  if(message.content.startsWith(config.prefix + "choose")) {
    let array = message.content.split(",");
    let options = array.slice(1);
    if(options.length !== 0) {
      message.channel.send("I choose " + `**${options[Math.floor(Math.random() * options.length)]}**`);
    } else if (options.length === 0) {
      message.channel.send("There's nothing to choose :thinking:");
    }

  }


}

module.exports.help = {
  name: 'choose'
}
