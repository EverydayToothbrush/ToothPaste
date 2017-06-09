const config = require('./config.json');

module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  }

}

module.exports.help = {
  name: 'ping'
}
