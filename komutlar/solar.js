const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setAuthor("Hong#6782")
        .setColor("0x0dfb00")
        .setTitle("Solar Bot Yapımcısı")
        .setFooter("Solar botu bir Türk discord kullanıcıs olan Hong#6782 tarafından yapılmıştır. Uzun süren çalışmalar sonucu ortaya çıkmıştır.")

        message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'solar',
  description: 'Solar botunun yapımı vs. anlatır.',
  usage: 'solar'
};
