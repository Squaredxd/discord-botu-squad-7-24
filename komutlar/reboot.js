const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("**[Solar]**: Bot yeniden başlatılıyor..").then(msg => {
        console.log("[Solar]: Yeniden başlatılıyor.");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yenidenbaşlat',
  description: 'Botu yeniden başlatır.',
  usage: 'yenidenbaslat'
};
