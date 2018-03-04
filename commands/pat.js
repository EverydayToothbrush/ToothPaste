
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  let patimg = fs.readdirSync('./commands/pats/');
  let msgarry = message.content.split(" ");
  if(msgarry[1] && (msgarry[1].replace(/<@!?|>/g, '') == message.mentions.users.first().id)) {
    let img = patimg[Math.floor(Math.random() * patimg.length)];
    let person = message.mentions.users.first();
    message.channel.send(`${message.author.username} gave <@${person.id}> a pat!`,
      {files: [
        {
          attachment: `./commands/pats/${img}`,
          name: `${img}`
        }
      ]});
  } else {
    let img = patimg[Math.floor(Math.random() * patimg.length)];
    message.channel.send({files: [
      {
        attachment: `./commands/pats/${img}`,
        name: `${img}`
      }
    ]});
  }
}


module.exports.help = {
  name: 'pat'
}
