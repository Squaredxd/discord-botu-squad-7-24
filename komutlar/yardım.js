const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Yardım Menüsü**")
        .setFooter("++eğlencekomutları: Eğlence komutlarını gösterir.")
        .setFooter("++anakomutlar: Ana komutları gösterir.")

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
  description: 'Yardım eder',
  usage: 'yardım'
};
