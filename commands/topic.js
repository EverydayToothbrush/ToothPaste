
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  message.channel.send(`<#${message.channel.id}>: ***${message.channel.topic}***`);
}



module.exports.help = {
  name: 'topic'
}
