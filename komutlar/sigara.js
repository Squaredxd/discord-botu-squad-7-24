const Discord = require('discord.js');


exports.run = function(client, message) {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} sigara içecekken durdurdum :D`,
            image: {
                url: "https://imgyukle.com/i/S1qAj"
            }
        }
    });
};  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara içirir.',
  usage: 'sigara'
};
