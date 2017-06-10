const config = require('./config.json');
const fs = require("fs");
const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "serverinfo")) {
    const embed = new Discord.RichEmbed()
      .setTitle('Server Information')
      .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
      .setColor([0, 255, 255])
      .setFooter('Don\'t Forget to Brush Your Teeth!', 'https://cdn.discordapp.com/avatars/181148305927962625/18a8691ce47a3175e8e836ca51d6da94.webp')
      .setThumbnail(`${message.guild.iconURL}`)
      .setTimestamp()
      .setURL(`${message.author.displayAvatarURL}`)
      .addField('Info', `**Member Count**: ${message.guild.memberCount}\n**Created**: ${message.guild.createdAt}\n**Owner**: ${message.guild.owner}\n**Region**: ${message.guild.region}\n**Verification Level**: ${message.guild.verificationLevel}`);


      message.channel.send({embed});

  }
}

module.exports.help = {
  name: 'serverinfo'
}
