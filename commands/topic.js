
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.content.startsWith(process.env.PREFIX + "topic")) {
    message.channel.send(`<#${message.channel.id}>: ***${message.channel.topic}***`);
  }

}



module.exports.help = {
  name: 'topic'
}
