const Discord = require("discord.js");
const paste = new Discord.Client();

const fs = require("fs");
const ytdl = require('ytdl-core');
const music = require('discord.js-music-v11');
const mal = require("maljs")
const SpoilerBot = require('discord-spoiler-bot');
const osu = require('node-osu');

paste.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("There are no Commands");
    return;

  }
  console.log('Loading ' + jsfiles.length + ' commands!');

  jsfiles.forEach((f, i) => {

    let props = require('./commands/' + f);
    console.log(i + 1 + ' : ' + f + ' loaded');
    paste.commands.set(props.help.name, props);

  });
});

paste.login(process.env.BOT_TOKEN);

paste.on('error', (e) => console.error(e));

paste.on('warn', (e) => console.warn(e));

paste.on('debug', (e) => console.info(e));

let config2 = {
    client: paste,
    markUserIds: [
      '181148305927962625',
      '229356212414709760',
      '212405356142264320',
      '212930627115286529'
    ],
};

let bot = new SpoilerBot(config2);
bot.connect()

paste.on('ready', () => {
  console.log('I am ready!');
  console.log(paste.commands);
  paste.user.setGame('with Toothbrush | [help')
});

music(paste, {
  prefix: process.env.PREFIX,
  global: false,
  maxQueueSize: 10,
  clearInvoker: false

});

var osuApi = new osu.Api(process.env.OSUKEY, {
  notFoundAsError: true,
  completeScores: true
});

paste.on("message", (message) => {
  let beatmap = `https://osu.ppy.sh/b/`;
  if(message.content.startsWith(beatmap)) {
    let mapId = message.content.slice(beatmap.length).replace('&m=0', '');
    osuApi.getBeatmaps({b: mapId}).then(beatmaps => {
      const embed = new Discord.RichEmbed()
        .setTitle(`${beatmaps[0].title} Details`)
        .setAuthor(`${beatmaps[0].title}`, `https://b.ppy.sh/thumb/${beatmaps[0].beatmapSetId}l.jpg`)
        .setColor([255,28,220])
        .setDescription(`**Difficulty**: ${beatmaps[0].version}\n**Source**: ${beatmaps[0].source}\n**Artist**: ${beatmaps[0].artist}\n**Creator**: ${beatmaps[0].creator}   **Status**: ${beatmaps[0].approvalStatus}\n**Genre**: ${beatmaps[0].genre}   **Language**: ${beatmaps[0].language}`)
        .setFooter(`Don't Forget to Brush Your Teeth!`, `${message.author.displayAvatarURL}`)
        .setThumbnail(`https://b.ppy.sh/thumb/${beatmaps[0].beatmapSetId}l.jpg`)
        .setTimestamp()
        .setURL(`${beatmap}${beatmaps[0].id}`)
        .addField('Stats', `***Mode***: ${beatmaps[0].mode}\n**BPM**: ${beatmaps[0].bpm}\n**${beatmaps[0].difficulty.rating.substr(0,4)}** Stars   CS **${beatmaps[0].difficulty.size}**   OD **${beatmaps[0].difficulty.overall}**   AR **${beatmaps[0].difficulty.approach}**   HP **${beatmaps[0].difficulty.drain}**   Max Combo **${beatmaps[0].maxCombo}**\n\n**${beatmaps[0].counts.favorites}** Favorites   **${beatmaps[0].counts.plays}** Plays   **${beatmaps[0].counts.passes}** Passes`)
        .addField('Tags', `${beatmaps[0].tags.slice(0)}`);
      message.channel.send({embed});
    });
  }

  if(message.channel.type === 'dm') {
    const Cleverbot = require('cleverio');
    const clevs = new Cleverbot({
      key: 'MW0YOZgHAAao2OfDBcrgNAgnmzPPcCsR',
      user: 'CxDjXK49QfMgI6CY',
      nick: 'session2'
    });
    clevs.create();
    let query = message.content.slice(0);
    clevs.ask(query).then(res => {
      console.log(res.response);
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(res.response);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);

    });
  }

  if(!message.content.startsWith(process.env.PREFIX)) return;
  if(message.author.bot) return;

  let messageArray = message.content.split(/\s+/g)
  let command = messageArray[0]
  let args = messageArray.slice(1);

  let commands = paste.commands.get(command.slice(process.env.PREFIX.length));
  if(commands) commands.run(client, message, args);


});


paste.on("guildMemberAdd", (member) => {
  member.guild.defaultChannel.send('Welcome ' + `<@${member.user.id}>` + ` to **${member.guild.name}**`);
});


paste.on("guildMemberRemove", (member) => {
  member.guild.defaultChannel.send(`***${member.user.username}*** has left`);
});
