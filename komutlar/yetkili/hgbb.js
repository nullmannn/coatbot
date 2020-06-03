module.exports = {
  
  name: 'hgbb',
  aliases:["hg-bb"],
  category: 'moderaditon',
  
  run: (client, message, args) => {
    const db = require("quick.db")
    let Discord = require("discord.js")
       let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
       let yes = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
      const member3 = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)

      const err = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${no}**HATA**${no} - Bir Kanal Etiketlermisin?`)
      const s = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${yes}**BAŞARILI**${yes} - Hgbb Başarıyla Ayarlandı`)
  
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.chnanel.send(member3)
    let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send(err)
    db.set(`hgbb.${message.guild.id}`,kanal.id)
    message.channel.send(s)
   }
}