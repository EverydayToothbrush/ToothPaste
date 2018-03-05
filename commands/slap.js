
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  let slapimg = fs.readdirSync('./commands/slaps/');
  let msgarry = message.content.split(" ");
  if(slapimg.length == 0) {
    message.channel.send("There are no images.");
  }
  if(msgarry[1] && (message.mentions.users.first() != undefined)) {
    let img = slapimg[Math.floor(Math.random() * slapimg.length)];
    let person = message.mentions.users.first();
    if(person.id == 181148305927962625) {
      message.channel.send(`The slap was deflected with the force a thousand toothbrushes, <@${message.author.id}> has now died with perfect dental health.`)
    } else {
      message.channel.send(`**${message.author.username}** slapped <@${person.id}> !`,
        {files: [
          {
            attachment: `./commands/slaps/${img}`,
            name: `${img}`
          }
        ]});
      }
  } else {
    let img = slapimg[Math.floor(Math.random() * slapimg.length)];
    message.channel.send({files: [
      {
        attachment: `./commands/slaps/${img}`,
        name: `${img}`
      }
    ]});
  }
}


module.exports.help = {
  name: 'slap'
}
