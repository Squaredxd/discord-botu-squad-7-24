const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**YARDIM**")
        .addField("Komutlar:",
            "++anakomutlar: Ana komutları gösterir.",
	    "++eğlencekomutları: Eğlence komutlarını gösterir.")

	message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping','p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};
