module.exports = {
  
  name: 'sayac-kapat',
  aliases: ['sayac-kapat'],
  category: 'moderaditon',
  
  run: (client, message, args) => {
    const db = require("quick.db")
    let Discord = require("discord.js")
      let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
        let yes = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
      const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
      const s = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${yes}**BAŞARILI**${yes} - Sayaç Başarılı Bir Şekilde Kapatıldı`)
      const err = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${no}**HATA**${no} - Sayaç Başarı Zaten Kapalı`)
  let veri = db.fetch(`sayac.${message.guild.id}`)
        if (!message.member.hasPermission("MANAGE_SERVER")) return message.chnanel.send(member3)
   if(veri) {
   db.delete(`sayac.${message.guild.id}`)
    message.channel.send(s)
   }else{
    message.channel.send(err)
   }
   }
}