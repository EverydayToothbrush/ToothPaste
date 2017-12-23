
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(!message.content.slice(9)) {
    message.channel.fetchMessages({limit: 2})
      .then(msg => {
        let actualStr = msg.last().toString();
        let reverseStr = actualStr.split("").reverse().join();
        let product = reverseStr.replace(/,/g, '');
        message.channel.send(product);
      });
  } else {
    let str = message.content.slice(9);
    let reversed = str.split("").reverse().join();
    let product = reversed.replace(/,/g, '');
    message.channel.send(product);
  }
}



module.exports.help = {
  name: 'reverse'
}
