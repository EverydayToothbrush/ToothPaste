
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "say")) {
    message.delete(100);
    let it = message.content.slice(5);
    if(it) {
      message.channel.send(`***${it}***`);
    } else {
      message.channel.send('What am I saying?');
    }

  }

}



module.exports.help = {
  name: 'say'
}
