const ytdl = require('ytdl-core');

exporst.run = async (client, message, args, ops) => {

  if (!message.member.voiceChannel) return message.channel.send('Lütfen bir müzik kanalına girin');

  if (message.guild.me.voiceChannel) return message.channel.send('Üzgünüm bot zaten bu odada.');

  if (!args[0]) return message.channel.send('Üzgünüm, url girmen gerek!');
  
  let validate = await ytdl.validateURL(args[0]);

  if (!validate) return message.channel.send('Üzgünüm, lütfen geçerli bir url girin.');

  let info = await ytdl.getInfo(args[0]);

  let connection = await message.member.voiceChannel.join();

  let dispatcher = await connection.play(ytdl(args[0], {filter: 'audioonly'}));

  message.channel.send('Şuanda çalan şarkı: ' + ${info.title});

};
