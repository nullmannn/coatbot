module.exports = {

    name: 'lvl',
    aliases: ['lvl'],
    category: 'moderation',

    run: (app, message, args) => {
    const db = require("quick.db")
      let Discord = require("discord.js")
      let yes = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
       let m = message
     let no = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
       let durum = db.fetch(`levelayar.${m.guild.id}.durum`)  
  const member3 = new Discord.MessageEmbed()
       
.setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.chnanrl.send(member3)
       let s = args[0]
       let c = args[1]
       if(s === "ayar") {
         let ayar = db.fetch(`levelayar.${message.guild.id}.durum`)
         if(ayar) {
            db.delete(`levelayar.${message.guild.id}.durum`)
          m.channel.send(`${yes}**BAŞARILI**${yes} - Level sistemi başarıyla kapatıldı`)
         }else{
           db.set(`levelayar.${message.guild.id}.durum`,true)
           m.channel.send(`${yes}**BAŞARILI**${yes} - Level sistemi başarıyla açıldı`)
         }
         /*
         `${no}**HATA**${no} - `
         `${yes}**BAŞARILI**${yes} - `
         */
       }else if(s === "logkanal") {
          if(!durum) return m.channel.send(`${no}**HATA**${no} - Seviye sistemi açık değil`)
    let kanal = message.mentions.channels.first() 
        if(c === "ayarla") {
           if(!kanal) return m.channel.send(`${no}**HATA**${no} - Bir Kanal Etiketlermisin`)
           db.set(`levelayar.${message.guild.id}.log`,kanal.id)
           m.channel.send(`${yes}**BAŞARILI**${yes} - Artık seviye atlayınca ${kanal} a yazı aticam`)
        }else if(c === "kapat") {
           db.delete(`levelayar.${message.guild.id}.log`)
           m.channel.send(`${yes}**BAŞARILI**${yes} - Artık seviye atlayınca belirli kanala atılmıcak`)
         }else{
               m.channel.send(`${no}**HATA**${no} - \`ayarla\` veya \`kapat\` yazman gerekiyor `)
       
         }
         /*
         let izin = db.fetch(`levelayar.${m.guild.id}.kanalizin.${m.channel.id}`)
         let log = db.fetch(`levelayar.${message.guild.id}.log`)
         let mesaj = db.fetch(`levelayar.${message.guild.id}.mesaj`)
         let durum = db.fetch(`levelayar.${message.guild.id}.durum`)
         */
       }else if(s === "kanalizin") {
            if(!durum) return m.channel.send(`${no}**HATA**${no} - Seviye sistemi açık değil`)
  let kanal = message.mentions.channels.first() 
         if(c === "ayarla") {
           if(!kanal) return m.channel.send(`${no}**HATA**${no} - Bir Kanal Etiketlermisin`)
           db.set(`levelayar.${message.guild.id}.kanalizin.${kanal.id}`,true)
           m.channel.send(`${yes}**BAŞARILI**${yes} - Artık ${kanal} da xp kazanilmicak`)
        }else if(c === "kapat") {
           if(!kanal) return m.channel.send(`${no}**HATA**${no} - Bir Kanal Etiketlermisin`)
           db.delete(`levelayar.${message.guild.id}.kanalizin.${kanal.id}`)
           m.channel.send(`${yes}**BAŞARILI**${yes} - Artık ${kanal} da xp kazanilcak`)
         }else{
               m.channel.send(`${no}**HATA**${no} - \`ayarla\` veya \`kapat\` yazman gerekiyor `)
       
         }
       }else if(s === "mesaj") {
          if(!durum) return m.channel.send(`${no}**HATA**${no} - Seviye sistemi açık değil`)
   let ayar = db.fetch(`levelayar.${message.guild.id}.mesaj`)
        if(ayar) {
            db.delete(`levelayar.${message.guild.id}.mesaj`)
          m.channel.send(`${yes}**BAŞARILI**${yes} - Level mesajı başarıyla açılldı`)
         }else{
           db.set(`levelayar.${message.guild.id}.mesaj`,true)
           m.channel.send(`${yes}**BAŞARILI**${yes} - Level mesajı başarıyla kapatıldı`)
         }
        }else{
               m.channel.send(`${no}**HATA**${no} - Bir Seçenek Seçmen Gerek [\`ayar\`,\`logkanal\`,\`kanalizin\`,\`mesaj\`] `)
       
       }
       }
}