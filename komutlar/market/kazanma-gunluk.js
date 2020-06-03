
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms');
module.exports = {
    name: 'gunluk',
    aliases: ['günlük'],
    category: 'bot',

    run: async (client, m, args, ayarlar) => {
     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
      let vip = await db.fetch(`vip.${m.author.id}`)
    let timeout = 43200000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`gunluk.${m.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        const yasa = new Discord.MessageEmbed()
        .setDescription(`Günlük ödülün için **${time.hours} saat**, **${time.minutes} dakika**, **${time.seconds} saniye** beklemelisin!`)
        m.channel.send(yasa)
    } else {
      if(vip) {
        db.set(`gunluk.${m.author.id}`, Date.now())
          const randomizer = getRandomInt('150', '500')
          db.add(`coin.${m.author.id}`, randomizer)
          let para1 = new Discord.MessageEmbed()
          .setDescription(`**Hesabına** \`${randomizer} coin\` **eklendi!**`)
          m.channel.send(para1)
      }else{
        db.set(`gunluk.${m.author.id}`, Date.now())
          const randomizer = getRandomInt('50', '150')
          db.add(`coin.${m.author.id}`, randomizer)
          let para1 = new Discord.MessageEmbed()
          .setDescription(`**Hesabına** \`${randomizer} coin\` **eklendi!**`)
          m.channel.send(para1)
        
      }
          }


}
}