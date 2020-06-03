
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');


module.exports = {
    name: 'efsanevikasa',
    aliases: "",
  category: 'bot',

    run: async (client, m, args, ayarlar) => {
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}  
      let min = '1'
      let max = '6'
      let sure = getRandomInt('15', '30')
     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
     let süre = ms(sure +"d")
     let vip = db.fetch(`vipsure.${m.author.id}`)
     let embed = new Discord.MessageEmbed()
     let dm = new Discord.MessageEmbed()
        let err = new Discord.MessageEmbed()
     let coin = db.fetch(`coin.${m.author.id}`) || 0
    err.setDescription(`${m.author} , Yeterli coinin yok`)    
     if(coin < 50000) return m.channel.send(err)
  if(vip) {
         db.add(`vipsure.${m.author.id}`,süre)
       db.add(`coin.${m.author.id}`,-50000)
      db.set(`vip.${m.author.id}`,true ) 
      embed.setDescription(`${m.author} , ${sure} günlük vip üyeliğin aktif`)
         dm.setDescription(`${m.author.tag} , ${sure} günlük vip üyelik aldı`)
     m.channel.send(embed)
       client.channels.cache.get("716012277844672524").send(dm)
     }else{
       db.add(`vipsure.${m.author.id}`,süre)
       db.add(`coin.${m.author.id}`,-20000)
      db.set(`vip.${m.author.id}`,true ) 
        embed.setDescription(`${m.author} , ${sure} günlük vip üyeliğin aktif`)
        dm.setDescription(`${m.author.tag} , ${sure} günlük vip üyelik aldı`)
         m.channel.send(embed)
       client.channels.cache.get("716012277844672524").send(dm)
     }
}
}