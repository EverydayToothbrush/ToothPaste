const config = require('./config.json');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "about")) {
    const embed = new Discord.RichEmbed()
      .setTitle('Lemme tell ya about myself!')
      .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL}`)
      .setColor([255,255,255])
      .setDescription(`Created: ${client.user.createdAt}\nHello! I'm the companion to every toothbrush. I was created by <@181148305927962625> in JavaScript using the discord.js module.\nMy purpose was experimental and commands are added at the whims of my creator.\nI feature Join and Leave messages, and an assortment of other miscellaneous commands. You can view a list via '[help.'\nAlways beware of your dental health! :smile: :wave:`)
      .setFooter('Don\'t Forget to Brush Your Teeth!', `${message.author.displayAvatarURL}`)
      .setThumbnail(`${client.user.displayAvatarURL}`)
      .setTimestamp()
      .setURL('https://github.com/EverydayToothbrush/Toothpaste');

    message.channel.send({embed});


  }

}

module.exports.help = {
  name: 'about'
}
