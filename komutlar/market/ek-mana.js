
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'mana',
    aliases: "",
    category: 'bot',

    run: (client, m, args, ayarlar) => {
     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'succes');
     let coin = db.fetch(`coin.${m.author.id}`) || 0
     let mana = db.fetch(`mana.${m.author.id}`) || 0
     let embed = new Discord.MessageEmbed()
         if(coin > 2500) {        
           db.add(`mana.${m.author.id}`,10)
           db.add(`coin.${m.author.id}`,-2500)
       embed.setDescription(`${gold} **BAŞARILI** ${gold} - 10adet mana aldın( \`mana sayısı = ${mana + 10}\` )`)
        m.channel.send(embed)   
     }else{
       embed.setDescription(`${hyr} **HATA** ${hyr} - Yeteri kadar coinin yok`)
        m.channel.send(embed)   
     }
}
}