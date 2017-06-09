const config = require('./config.json');
const fs = require("fs")
module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_ROLES")){
    if(message.content.startsWith(config.prefix + "info")) {
      message.delete(2000)
      message.channel.send({embed:{
        color: 14365765,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: 'Info and Rules',
        description: 'Basic guidelines to follow, Mods have final say in any penal action which may be taken following sufficient warnings.',
        fields: [{
          name: 'Info',
          value: 'Bot prefixes are \'**-**\' \'**$**\' \'**`**\' \'**!**\'.    Ranks are gained by chatting (see rules).      Check with !rank.     At level 5 you may ask for a specific color in the #general pinned messages (Dark Blue and Light Pink not listed but available).          If you play osu! we have a role and channel.          Post your anime list of any kind in #mal.'
          },
          {
          name: 'Rules (including but not limited to)',
          value: '**Don\'t be an ass** (e.g. trolling, harassing, racism, homophobia, etc. you get the idea), **Do not spam** (you may do so in #shitpost but it cant be the same thing repeating), **No NSFW anywhere** (including #shitpost).             **Keep discussions/content to approriate channels.**'
          },
        ],
        timestamp: new Date(),
        footer: {
        icon_url: client.user.avatarURL,
        text: 'dont forget to brush your teeth'
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
