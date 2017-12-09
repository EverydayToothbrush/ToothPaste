
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let user = message.mentions.users.first()
    let msgArray = message.content.split(" ");
    let messagecount = parseInt(msgArray[1]);
    if(!Number.isInteger(messagecount) && !user) {
      message.reply("There is no amount or user specified");
      return;
    } else if(!Number.isInteger(messagecount) && user) {
      message.reply("There is no amount specified");
      return;
    } else if(Number.isInteger(messagecount) && user) {
      message.channel.fetchMessages({limit: messagecount})
        .then(messages => {
          let mentionmsg = messages.filter(m => m.author.id === user).array().slice(0, messagecount);
          message.channel.bulkDelete(mentionmsg);
        });
        message.channel.send("Deleted " + messagecount + " messages", {code: 'js'})
          .then(message => message.delete(2000));
    } else {
    message.channel.fetchMessages({limit: messagecount})
      .then(messages => message.channel.bulkDelete(messages));
      message.channel.send("Deleted " + messagecount + " messages", {code: 'js'})
        .then(message => message.delete(2000));
    }
  } else {
    message.channel.send("You Have Not Brushed Your Teeth!");
  }

}

module.exports.help = {
  name: 'prune'
}
