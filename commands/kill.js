
const fs = require("fs");
const cmds = require('./cmds.json');
module.exports.run = async (client, message, args) => {
  if(message.author.id === process.env.OWNER_ID) {
    await message.channel.send("Off To The Dentist o/");
    process.exit();
  } else {
    message.channel.send("Please do not do that...");
  }
}

module.exports.help = {
  name: 'kill'
}
