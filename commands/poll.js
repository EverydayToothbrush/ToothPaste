const config = require('./config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(config.prefix + "poll")) {
    let choices = message.content.split(" ");
    let poll = choices.slice(1);
    if(poll.length === 2) {
      await message.react('🇦');
      message.react('🇧');
    } else if (poll.length === 3) {
      await message.react('🇦');
      await message.react('🇧');
      message.react('🇨');
    } else if (poll.length === 4) {
      await message.react('🇦');
      await message.react('🇧');
      await message.react('🇨');
      message.react('🇩');
    } else {
      message.channel.send("You have either too many or too few arguments :(")
    }

  }

}



module.exports.help = {
  name: 'poll'
}
