const Discord = require("discord.js");
const Cleverbot = require('cleverbot.io');
const client = new Discord.Client();
const clbot = new Cleverbot('RLyV1npsmZGSBgTB','iI6kddTQkK7WqmE2okNpi0Uiuq5NzoQR');
const config = require('./commands/config.json');
const fs = require("fs");
const ytdl = require('ytdl-core');
const music = require('discord.js-music-v11');
const mal = require("maljs")
const SpoilerBot = require('discord-spoiler-bot');

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
    markAllowAll: false,
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


client.on("message", (message) => {

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
