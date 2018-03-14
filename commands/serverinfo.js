
const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle('Server Information')
    .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
    .setColor([0, 255, 255])
    .setFooter('Don\'t Forget to Brush Your Teeth!', `${client.users.get('181148305927962625').displayAvatarURL}`)
    .setThumbnail(`${message.guild.iconURL}`)
    .setTimestamp()
    .setURL(`${message.author.displayAvatarURL}`)
    .addField('Info', `**Member Count**: ${message.guild.memberCount}\n**Created**: ${message.guild.createdAt}\n**Owner**: ${message.guild.owner}\n**Region**: ${message.guild.region}\n**Verification Level**: ${message.guild.verificationLevel}`);


    message.channel.send({embed});
}

module.exports.help = {
  name: 'serverinfo'
}
