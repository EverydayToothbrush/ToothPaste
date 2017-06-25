

module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(process.env.PREFIX + "ping")) {
    message.channel.send("Pong!" + ` Ping is ${Math.floor(message.client.ping)}ms`, {code: 'js'});
  }

}

module.exports.help = {
  name: 'ping'
}
