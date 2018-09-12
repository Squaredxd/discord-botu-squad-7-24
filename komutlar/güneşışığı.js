const Discord = require('discord.js');

const cevaplar = [
  "Evet!",
  "Hayır!",
  "Belki şanslıysan :)",
  "Bokta çıkabilir. Hıhıhı",
  "Daha sonra bakarız.",
  "İmkansız olucak şey değil!"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if(!soru) return message.reply('Bir soru belirtmen lazım ben **güneş ışığı!!**')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güneşışığı',
  description: 'Sen sor güneş ışığı sihirli bir ışıkla cevaplasın!',
  usage: 'güneşışığı <soru>'
};
