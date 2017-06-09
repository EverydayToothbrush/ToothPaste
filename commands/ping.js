const config = require('./config.json');

module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("Pong!" + ` Your ping is ${client.ping}ms`, {code: 'js'});
  }

}

module.exports.help = {
  name: 'ping'
}
