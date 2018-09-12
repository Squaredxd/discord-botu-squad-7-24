const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ');

  if(sayi.length < 1) {
    return message.reply("Silmek için bir miktar belirtmen gerek!")
  } else {    
      message.channel.bulkDelete(sayi);
    message.channel.send("**" + sayi + "** tane mesaj silindi!").then(msg =>{
        msg.delete("5000")
    });
   }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'temizle',
  description: 'Belirttiğiniz miktarda mesaj siler.',
  usage: 'temizle <miktar>'
};
