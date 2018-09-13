const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Eğlence Komutları Menüsü**")
        .setFooter("Emojiyazı: Emoji ile yazdırmanızı sağlar.")
        .setFooter("Sigara: Sigara içmemenizi sağlar.")
        .setFooter("Slots: Slot çevirmenizi sağlar.")
        .setFooter("Stresçarkı: Stres çarkı çevirir.")
        .setFooter("Yaz: Bota söylediğiniz kelime ve cümleyi yazdırır.")
	
	message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlencekomutları',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlencekomutları'
};
