const config = require('./config.json');
const fs = require("fs");
const osu = require('node-osu');

var osuApi = new osu.Api(config.osukey, {
  notFoundAsError: true,
  completeScores: true
});

module.exports.run = async (client, message, args) => {
  if (message.content.startsWith(config.prefix + "osuprofile")) {
    let osuuser = message.content.split(" ").slice(1);
    osuApi.getUser({u: osuuser}).then(user =>{
      message.channel.send({embed: {
        color: 6632550,
        description: `${user.name}: ${user.pp.raw}`
      }});
    });


    }
  }


module.exports.help = {
  name: 'osuprofile'
}
