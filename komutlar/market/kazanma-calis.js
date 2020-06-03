
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms');
module.exports = {
    name: 'calis',
    aliases: ['çalış'],
    category: 'bot',

    run:async (client, m, args, ayarlar) => {
   let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
      let vip = await db.fetch(`vip.${m.author.id}`)
    let timeout = 43200000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`calis.${m.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        const yasa = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`Çok yoruldun birdaha çalışmak için **${time.hours} saat**, **${time.minutes} dakika**, **${time.seconds} saniye** beklemelisin!`)
        m.channel.send(yasa)
    } else {
      let embed = new Discord.MessageEmbed()
      let x = args[0]
      if(x === "polis") {
        db.set(`calis.${m.author.id}`, Date.now())
        db.add(`coin.${m.author.id}`,2500)
        embed.setTitle("Karakolda Çalıştın Ve 2500coin aldın")
        embed.setImage("https://cdn.discordapp.com/attachments/715237230465253417/716001053270605985/GenerousRemoteChipmunk-max-1mb.gif")
        m.channel.send(embed)
      }else if(x === "doktor") {
        db.set(`calis.${m.author.id}`, Date.now())
        db.add(`coin.${m.author.id}`,4500)
        embed.setTitle("Ameliyata Girdin Ve 4500coin aldın")
        embed.setImage("https://cdn.discordapp.com/attachments/715237230465253417/716001053723852900/indir_1.jpeg")
        m.channel.send(embed)  
      }else if(x === "taksici") {
        db.set(`calis.${m.author.id}`, Date.now())
          db.add(`coin.${m.author.id}`,1500)
        embed.setTitle("Durakta Çalıştın Ve 1500coin aldın")
        embed.setImage("https://cdn.discordapp.com/attachments/715237230465253417/716001054235426836/indir.jpeg")
        m.channel.send(embed)
       }else if(x === "futbolcu") {
         let mana = db.fetch(`mana.${m.author.id}`)
        if(!vip) {
          if(mana < 100) {
        embed.setDescription(`${hyr} **HATA** ${hyr} - Yeteri Kadar Manan Yok`)
        m.channel.send(embed)   
         }else{
        db.set(`calis.${m.author.id}`, Date.now())
          db.add(`coin.${m.author.id}`,7500)
        embed.setTitle("Sahalara Çıktın Ve 7500coin aldın")
        embed.setImage("https://cdn.discordapp.com/attachments/715237230465253417/716001054977949806/tenor.gif")
        m.channel.send(embed)        
         }
        }else{
          db.set(`calis.${m.author.id}`, Date.now())
        db.add(`coin.${m.author.id}`,7500)
        embed.setTitle("Sahalara Çıktın Ve 7500coin aldın")
        embed.setImage("https://cdn.discordapp.com/attachments/715237230465253417/716001054977949806/tenor.gif")
        m.channel.send(embed)          
        }
      }else{
        embed.setDescription(`${hyr} **HATA** ${hyr} - Bir meslek seç[\`polis\`,\`doktor\`,\`taksici\`,\`futbolcu\`]`)
        m.channel.send(embed)   
      }
          }

}
}