
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'transfer',
    aliases: "",
    category: 'bot',

    run: (client, m, args, ayarlar) => {
     let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'succes');
     let u = m.mentions.users.first() 
    let op = args[1]
    if(!u) return m.channel.send(`${no} **HATA** ${no} - Birisini Etiketle`)
     if(u === m.author) return m.channel.send(`${no} **HATA** ${no} - Yav yürü git kendine para verecekmiş`)
    if(!op) return m.channel.send(`${no} **HATA** ${no} - Bir miktar belirt`)
    if(isNaN(op)) return m.channel.send(`${no} **HATA** ${no} - Bir rakam olmalı`)
      let coin = db.fetch(`coin.${u.id}`) || 0
    let coinx = db.fetch(`coin.${m.author.id}`)
      if(coinx < 0) return m.channel.send(`${no} **HATA** ${no} - Biraz dahi paran yokmu`)
    db.add(`coin.${u.id}`,op)
   db.add(`coin.${m.author.id}`,-op)
     const embed = new Discord.MessageEmbed()
      .setDescription(`\`\`\`Aktarma Başarılı\`\`\`

${u}  
** ▸ Eski Coin =** ${coin}
** ▸ Yeni Coin =** ${parseInt(coin) + parseInt(op)}
${m.author}  
** ▸ Eski Coin =** ${coinx}
** ▸ Yeni Coin =** ${coinx - op}`)
      m.channel.send(embed)
    }}
