const config = require('./config.json');
const fs = require("fs")
module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "prefix")) {
    if(!message.content.slice(8)) {
      return;
    }
    config.prefix = args[0];
    fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err)});
  }

}

module.exports.help = {
  name: 'prefix'
}
