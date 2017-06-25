const config = require('./config.json');
const fs = require("fs")
module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_ROLES")){
    if(message.content.startsWith(process.env.PREFIX + "info")) {
      message.delete(2000)
      message.channel.send({embed:{
        color: 14365765,
        author: {
          name: message.member.displayName,
          icon_url: message.author.displayAvatarURL
        },
        title: 'Info and Rules',
        description: 'Basic guidelines to follow, Mods have final say in any penal action which may be taken following sufficient warnings.',
        fields: [{
          name: 'Info',
          value: 'Bot prefixes are \'**-**\' \'**$**\' \'**`**\' \'**!**\'.\nRanks are gained by chatting (see rules).\nCheck with !rank.\nAt level 5 you may ask for a specific color in the #general pinned messages (Dark Blue and Light Pink not listed but available).\nIf you play osu! we have a role and channel.\nPost your anime list of any kind in #mal.'
          },
          {
          name: 'Rules (including but not limited to)',
          value: '**Don\'t be an ass** (e.g. trolling, harassing, racism, homophobia, etc. you get the idea)\n**Do not spam** (you may do so in #shitpost but it cant be the same thing repeating)\n**No NSFW anywhere** (including #shitpost).\n**Keep discussions/content to approriate channels.**'
          },
        ],
        timestamp: new Date(),
        footer: {
        icon_url: client.user.avatarURL,
        text: 'Dont Forget to Brush Your Teeth!'
        }
      }
      });
    }


  }
  else {
    message.channel.send("You Have Not Brushed Your Teeth!");
  }

}

module.exports.help = {
  name: 'info'
}
