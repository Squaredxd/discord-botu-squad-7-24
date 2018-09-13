const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Sigara Sağlığa Zararlıdır -Solar**")
		.setImage("https://imgyukle.com/i/S1qAj")
	
	message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara iç belki sürpriz olabilir :)',
  usage: 'sigara'
};
