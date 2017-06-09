const config = require('./config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

  if(message.content.startsWith(config.prefix + "rate")) {
    if(!message.content.slice(6)) {
      message.channel.send("Nothing to rate :(", {code: 'js'})
    } else {
    let arg = "**" + message.content.slice(6) + "**";
    let roll = Math.floor(Math.random() * 100) + 1;
    message.channel.send("I rate " + arg + " a " + roll + "/100");
    }

  }

}




module.exports.help = {
  name: 'rate'
}
