
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'profil',
    aliases: "",
    category: 'bot',

    run: (client, m, args, ayarlar) => {
     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'succes');
     let u = m.mentions.users.first() || m.author
      let coin = db.fetch(`coin.${u.id}`) || 0
     let mana = db.fetch(`mana.${u.id}`) || 0
    const moment = require("moment");
    require("moment-duration-format");
    const duration = moment
      .duration(db.fetch(`vipsure.${u.id}`) - Date.now())
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
       let vip = ""
      let sure = ""
     if(db.fetch(`vip.${u.id}`)) {
      vip = gold
        if(db.fetch(`vipsure.${u.id}`)) {
     sure = duration
     }else{
        sure = `Sınırsız`
     }
    
     }else{
      vip = hyr
       sure = `Vip Degil`
     }
      const embed = new Discord.MessageEmbed()
      .setDescription(`\`\`\`${u.tag} Profili\`\`\`


** ▸ Coin =** ${coin}
** ▸ Mana =** ${mana}
** ▸ Vip? =** ${vip} / ${sure}`)
      m.channel.send(embed)
    }}
