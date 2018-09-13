const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Yardım Menüsü**")
        .setColor(0x00A385)
        .addField("++eğlencekomutları:", "Eğlence Komutlarını Gösterir.", true)
        .addField("++anakomutlar",`
        "Ana Komutları Gösterir.", true)
                  
         
    
    message.channel.send(embed)
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım menüsü',
  usage: 'yardım'
};
