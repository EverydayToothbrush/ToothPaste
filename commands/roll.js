
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  let number = parseInt(message.content.split(" ").pop())
  if(Number.isInteger(number)) {
    let rll = Math.floor(Math.random() * number) + 1;
    message.channel.send("You rolled a " + rll);
  } else {
  let roll = Math.floor(Math.random() * 100) + 1;
  message.channel.send("You rolled a " + roll);
  }
}

module.exports.help = {
  name: 'roll'
}
