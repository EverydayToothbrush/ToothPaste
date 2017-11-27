const weather = require('weather-js');
const fs = require("fs");
const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(process.env.PREFIX + "weather")) {
    let locat = message.content.slice(9);
    if(!locat) {
        message.channel.send("Where are you looking for?");
    } else {
      weather.find({search: `${locat}`, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        const embed = new Discord.RichEmbed()
          .setTitle(`Weather for ${result.location.name}`)
          .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
          .setColor('RANDOM')
          .setDescription(`Longitude: **${result.location.long}**   Latitude: **${result.location.lat}**\nDay: **${result.current.day}**   Temp: **${result.current.temperature}**`)
          .setFooter('Don\'t Forget to Brush Your Teeth!', 'https://cdn.discordapp.com/avatars/181148305927962625/18a8691ce47a3175e8e836ca51d6da94.webp')
          .setThumbnail(`${result.location.imagerelativeurl}`)
          .setTimestamp()
          .setURL(`${message.author.displayAvatarURL}`);


          message.channel.send({embed});
      });
    }
  }
}

module.exports.help = {
  name: 'weather'
}
