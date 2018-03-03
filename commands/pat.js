
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  let patimg = fs.readdirSync('./commands/pats/');
  if(message.content.slice(5)) {
    let person = message.mentions.users.first();
    message.channel.send({files: [
      {
        attachment: `./commands/pats/${patimg[Math.floor(Math.random() * patimg.length)]}`,
        name: 'headpat.gif',
        content: `${message.author.username} gave <@${person.id}> a pat!`
      }
    ]});
  } else {
    message.channel.send({files: [
      {
        attachment: `./commands/pats/${patimg[Math.floor(Math.random() * patimg.length)]}`,
        name: 'headpat.gif'
      }
    ]});
  }
}


module.exports.help = {
  name: 'pat'
}
