
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
      message.channel.fetchMessages({limit: messagecount + 1})
        .then(messages => {
          let filter = user.id;
          let mentionmsg = messages.filter(m => m.author.id === filter).array();
          message.channel.bulkDelete(mentionmsg, true);
        });
        message.channel.send("Deleted " + messagecount + " messages", {code: 'js'})
          .then(message => message.delete(2000));
    } else {
    message.channel.fetchMessages({limit: messagecount + 1})
      .then(messages => message.channel.bulkDelete(messages, true));
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
