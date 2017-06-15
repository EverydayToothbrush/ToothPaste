const config = require('./config.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(config.prefix + "poll")) {
    let choices = message.content.split(" ");
    let poll = choices.slice(1);
    if(poll.length === 2) {
      let msg = await message.channel.send(`A: **${poll[0]}**   B: **${poll[1]}**`);
        await msg.react('🇦');
        msg.react('🇧');


    } else if (poll.length === 3) {
      let msg = await message.channel.send(`A: **${poll[0]}**   B: **${poll[1]}**   C: **${poll[2]}**`);
        await msg.react('🇦');
        await msg.react('🇧');
        msg.react('🇨');


    } else if (poll.length === 4) {
      let msg = await message.channel.send(`A: **${poll[0]}**   B: **${poll[1]}**   C: **${poll[2]}**   D: **${poll[3]}**`);
        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
        msg.react('🇩');



    } else {
      message.channel.send("You have either too many or too few arguments :(")
    }

  }

}



module.exports.help = {
  name: 'poll'
}
