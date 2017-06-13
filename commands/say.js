const config = require('./config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(config.prefix + "say")) {
    message.delete(100);
    let it = message.content.slice(5);
    message.channel.send(`***${it}***`);
  }

}



module.exports.help = {
  name: 'say'
}
