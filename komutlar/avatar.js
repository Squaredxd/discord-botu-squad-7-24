const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setImage(message.atuhor.avatarURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Kullanıcının avatarını gösterir',
  usage: 'avatar'
};
