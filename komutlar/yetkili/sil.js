module.exports = {
  
  name: 'sil',
  aliases: ["temizle"],
  category: 'moderaditon',
  
  run: (app, message, args) => {
        let Discord = require("discord.js")
    let no = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
    let o = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
       const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(member3)
    let x = args[0]
    let sayi = Number(x)
    if(!x) return message.channel.send(`${no}**HATA**${no} - Bir rakam girermisin`)
    if(isNaN(x)) return message.channel.send(`${no}**HATA**${no} - Bu bir rakam değil`)
    if(sayi > 100) return message.channel.send(`${no}**HATA**${no} - En fazla 100mesaj silebilirim`)
    message.channel.bulkDelete(sayi)
    message.channel.send(`${o}**Başarılı**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }
}