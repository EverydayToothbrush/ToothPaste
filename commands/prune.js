
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")){

    if(message.content.startsWith(process.env.PREFIX + "prune")) {
      let messagecount = parseInt(message.content.split(" ").pop());
      if(!Number.isInteger(messagecount)){
        message.reply("That is not a number");
        return;
      } else {
      message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
        message.channel.send("Deleted " + messagecount + " messages", {code: 'js'})
          .then(message => message.delete(2000));
      }


    }
  } else {
    message.channel.send("You Have Not Brushed Your Teeth!");
  }

}

module.exports.help = {
  name: 'prune'
}
