
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  let patimg = fs.readdirSync('./commands/pats/');
  let msgarry = message.content.split(" ");
  if(patimg.length == 0) {
    message.channel.send("There are no images.");
  }
  if(msgarry[1] && (message.mentions.users.first() != undefined)) {
    let img = patimg[Math.floor(Math.random() * patimg.length)];
    let person = message.mentions.users.first();
    if(message.author.id == person.id) {
      message.channel.send(`**${message.author.username}** is very lonely.`,
        {files: [
          {
            attachment: `./commands/pats/b3SzPZh.gif`,
            name: `b3SzPZh.gif`
          }
        ]});
    } else {
      message.channel.send(`**${message.author.username}** gave <@${person.id}> a pat!`,
        {files: [
          {
            attachment: `./commands/pats/${img}`,
            name: `${img}`
          }
        ]});
      }
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
