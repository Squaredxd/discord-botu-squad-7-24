const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents 

exports.run = function(client, message) {
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir işlem belirtmen lazım! **Örnek:** ++hesapla 10*10')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem **' + err)
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)
        .setColor(0x0dfb00)

        message.channel.send(embed)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'İşlem yapar',
  usage: 'hesapla <işlem>'
};
