module.exports = {
  
  name: 'sayac',
  aliases:["sayaç"],
  category: 'moderaditon',
  
  run: (client, message, args) => {
    const db = require("quick.db")
    let Discord = require("discord.js")
       let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
       let yes = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
      const member3 = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
  
      const hata = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bir Sayı Girermisin`)
 
      const err = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${no}**HATA**${no} - Bir Kanal Etiketlermisin?`)
      const s = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${yes}**BAŞARILI**${yes} - Sayaç Başarı İle Ayarlandı`)
  
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.chnanel.send(member3)
    let sayi = args[0]
    let kanal = message.mentions.channels.first()
    if(!sayi) return message.channel.send(hata)
    if(!kanal) return message.channel.send(err)
    db.set(`sayac.${message.guild.id}.sayi`,sayi)
    db.set(`sayac.${message.guild.id}.kanal`,kanal.id)
    message.channel.send(s)
   }
}