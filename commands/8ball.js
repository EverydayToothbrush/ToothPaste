
const fs = require("fs");
const answers = require("./8ball.json");

module.exports.run = async (client, message, args) => {
  message.channel.send(`${answers[Math.floor(Math.random() * 20) + 1]}`, {code: 'js'});
}



module.exports.help = {
  name: '8ball'
}
