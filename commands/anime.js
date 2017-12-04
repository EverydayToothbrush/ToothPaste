const Discord = require('discord.js');

const fs = require("fs");
const mal = require('maljs');

module.exports.run = async (client, message, args) => {
  let animesearch = message.content.slice(7);
  if(!animesearch) {
    message.channel.send("Nothing to search");
  } else {
    mal.quickSearch(animesearch).then(function(anime) {
      anime.anime[0].fetch().then(function(show) {
        const embed = new Discord.RichEmbed()
          .setTitle(`Synopsis`)
          .setAuthor(`${show.title}`, `${show.cover}`)
          .setColor([0, 100, 255])
          .setDescription(`${show.description}`)
          .setFooter(`Don't Forget to Brush Your Teeth!`, `${message.author.displayAvatarURL}`)
          .setThumbnail(`${show.cover}`)
          .setTimestamp()
          .setURL(`https://myanimelist.net${show.path}`)
          .addField('Details', `**Score**: ${show.score}\n*Type*: ${show.type}\n*Ranked*: ${show.ranked}\n*Popularity*: ${show.popularity}\n*Members*: ${show.members}`);
        message.channel.send({embed});
      });
    });
  }
}




module.exports.help = {
  name: 'anime'
}
