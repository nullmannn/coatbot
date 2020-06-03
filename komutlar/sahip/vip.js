
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'vip',
    aliases: ['vip'],
    category: 'bot',

    run: (client, message, args, ayarlar) => {
     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
const ms = require('ms')
  
  
 if(message.author.id != ayarlar.sahip) { return message.channel.send(`${hyr} Sahibimin Komutunu Kullanamazsın`)}

  let nesne = message.mentions.users.first()
  if (!nesne) return message.channel.send(`> ${hyr} Bir Kullanıcının ID'sini Girmelisin !`)
  if(!ms(args[1])) return message.channel.send(`> Süre Girmeyi Unuttun !`)
  
  db.set(`vip.${nesne.id}`, true)
  db.add(`vipsure.${nesne.id}`,ms(args[1]) + Date.now())
  message.channel.send(`> ${nesne} Etiketli Kullanıcı ${args[1]} Süresiyle Gold Oldu!`)
 
}
}