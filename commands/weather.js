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
          .setTitle(`Weather for ${result[0].location.name}`)
          .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL}`)
          .setColor('RANDOM')
          .setDescription(`Longitude: **${result[0].location.long}**   Latitude: **${result[0].location.lat}**`)
          .setFooter('Don\'t Forget to Brush Your Teeth!', 'https://cdn.discordapp.com/avatars/181148305927962625/18a8691ce47a3175e8e836ca51d6da94.webp')
          .setThumbnail(`${result[0].current.imageUrl}`)
          .setTimestamp()
          .addField(`Day: **${result[0].current.day}**`, `Temp: **${result[0].current.temperature} C/${((result[0].current.temperature) * (9/5)) + 32} F**   Condition: **${result[0].current.skytext}**   Date: **${result[0].current.date}**\nHumidity: **${result[0].current.humidity}**   Feels Like: **${result[0].current.feelslike} C/${((result[0].current.feelslike) * (9/5)) + 32} F** Wind: **${result[0].current.winddisplay}**\nPrecipitation: **${result[0].forecast[1].precip}%** Time: **${result[0].current.observationtime}**`)
          .addField(`Day: **${result[0].forecast[2].day}**`, `Temp (C): **${result[0].forecast[2].low}Low/${result[0].forecast[2].high}High**   Condition: **${result[0].forecast[2].skytextday}**   Date: **${result[0].forecast[2].date}**\nPrecipitation: **${result[0].forecast[2].precip}%**`)
          .addField(`Day: **${result[0].forecast[3].day}**`, `Temp (C): **${result[0].forecast[3].low}Low/${result[0].forecast[3].high}High**   Condition: **${result[0].forecast[3].skytextday}**   Date: **${result[0].forecast[3].date}**\nPrecipitation: **${result[0].forecast[3].precip}%**`)
          .addField(`Day: **${result[0].forecast[4].day}**`, `Temp (C): **${result[0].forecast[4].low}Low/${result[0].forecast[4].high}High**   Condition: **${result[0].forecast[4].skytextday}**   Date: **${result[0].forecast[4].date}**\nPrecipitation: **${result[0].forecast[4].precip}%**`);
          message.channel.send({embed});
      });
    }
  }
}

module.exports.help = {
  name: 'weather'
}
