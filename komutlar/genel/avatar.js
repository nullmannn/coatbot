const Discord = require('discord.js');
module.exports = {
  
  name: 'avatar',
  aliases: 'anime-pp',
  category: 'genel',
  
  run: async(client, message, args, ayarlar , prefix , modül) => {

//message.channel.startTyping()
  let arama = client.users.cache.get(modül.autocomplete(message, args.join(" ")));
  let idArama = client.users.cache.get(args.join(" "));
  let etiket = message.mentions.users.first();
  let kendi = message.author;
  let avatar = etiket || idArama || arama || kendi;
  if(!args[0]) avatar = kendi;
    let embed = new Discord.MessageEmbed()
    .setImage(avatar.displayAvatarURL({dynamic: true,size:1024}), "Coat_bot.png")
  message.channel.send(embed)
.catch(error => {
    message.channel.send(`**Bir hata çıktı!** Hatayı sunucumuza gelerek bildirebilirsiniz sunucumuz https://discord.gg/2pEZ9Vs `)
  });
    
//message.channel.stopTyping()
}}