const Discord = require("discord.js");
const Cleverbot = require('cleverio');
const client = new Discord.Client();
const clevs = new Cleverbot({
  key: 'MW0YOZgHAAao2OfDBcrgNAgnmzPPcCsR',
  user: 'CxDjXK49QfMgI6CY',
  nick: 'session2'
});
const config = require('./commands/config.json');
const fs = require("fs");
const ytdl = require('ytdl-core');
const music = require('discord.js-music-v11');
const mal = require("maljs")
const SpoilerBot = require('discord-spoiler-bot');
const osu = require('node-osu');

client.commands = new Discord.Collection();

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
    client.commands.set(props.help.name, props);

  });
});

client.login(config.token);

client.on('error', (e) => console.error(e));

client.on('warn', (e) => console.warn(e));

client.on('debug', (e) => console.info(e));

let config2 = {
    client: client,
    markUserIds: [
      '181148305927962625',
      '229356212414709760',
      '212405356142264320',
      '212930627115286529'
    ],
};

let bot = new SpoilerBot(config2);
bot.connect()

client.on('ready', () => {
  console.log('I am ready!');
  console.log(client.commands);
  client.user.setGame('with Toothbrush | [help')
});

music(client, {
  prefix: config.prefix,
  global: false,
  maxQueueSize: 10,
  clearInvoker: false

});

var osuApi = new osu.Api(config.osukey, {
  notFoundAsError: true,
  completeScores: true
});

client.on("message", (message) => {
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

  if(!message.content.startsWith(config.prefix)) return;
  if(message.author.bot) return;

  let messageArray = message.content.split(/\s+/g)
  let command = messageArray[0]
  let args = messageArray.slice(1);

  let commands = client.commands.get(command.slice(config.prefix.length));
  if(commands) commands.run(client, message, args);


});


client.on("guildMemberAdd", (member) => {
  member.guild.defaultChannel.send('Welcome ' + `<@${member.user.id}>` + ` to **${member.guild.name}**`);
});


client.on("guildMemberRemove", (member) => {
  member.guild.defaultChannel.send(`***${member.user.username}*** has left`);
});
