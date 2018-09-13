const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Ana Komutlar Menüsü**")
        .setFooter("Ping: Botun pingini gösterir.")
        .setFooter("Servericon: Sunucunun iconunu gösterir.")
        .setFooter("Solar: Bot hakkında bilgi verir.")
        .setFooter("Temizle: Yazıları temizler")
        .setFooter("Öneri: Çalışmıyor düzeltilicek.")
	
	message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: 'anakomutlar'
};
