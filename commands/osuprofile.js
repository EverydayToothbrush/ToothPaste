
const fs = require("fs");
const osu = require('node-osu');
const Discord = require('discord.js');


var osuApi = new osu.Api(process.env.OSUKEY, {
  notFoundAsError: true,
  completeScores: true
});

module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(process.env.PREFIX + "osuprofile")) {
    let osuuser = message.content.slice(12);
    if(!osuuser) {
      message.channel.send('No User');
    } else {
      osuApi.getUser({u: osuuser}).then(user => {
        const embed = new Discord.RichEmbed()
          .setTitle(`${user.name}'s Profile`)
          .setAuthor(`${user.name}`, `https://a.ppy.sh/${user.id}`)
          .setColor([255,137,233])
          .setDescription(`**Rank**: ${user.pp.rank} (${user.pp.countryRank})${user.country} - ${user.pp.raw}`)
          .setFooter(`Don't Forget to Brush Your Teeth!`, `${message.author.displayAvatarURL}`)
          .setThumbnail(`https://a.ppy.sh/${user.id}`)
          .setTimestamp()
          .setURL(`https://osu.ppy.sh/u/${user.id}`)
          .addField('Stats', `*Playcount*: ${user.counts.plays}\n\n**SS**: ${user.counts.SS}  **S**: ${user.counts.S}  **A**: ${user.counts.A}\n\n*Accuracy*: ${user.accuracyFormatted} *Level*: ${user.level}\n\n*Total Score*: ${user.scores.total}\n*Ranked Score*: ${user.scores.ranked}`);

        message.channel.send({embed});


      });
    }
  }
}



module.exports.help = {
  name: 'osuprofile'
}
