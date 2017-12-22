
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(!message.content.slice(9)) {
    message.channel.fetchMessages({limit: 2})
      .then(msg =>
        let actualStr = msg.last();
        let reverseStr = actualStr.split("").reverse().join();
        message.channel.send(reverseStr);
      );
  } else {
    let str = message.content.slice(9);
    let reversed = str.split("").reverse().join();
    message.channel.send(str);
  }
}



module.exports.help = {
  name: 'reverse'
}
