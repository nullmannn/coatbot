
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms');


module.exports = {
    name: 'soy',
    aliases: "",
  category: 'bot',

    run: async (client, m, args, ayarlar) => {
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}  
      let sahip = ayarlar.sahip
    let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let yes = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'succes');
      let u = m.mentions.users.first()
      if(!u) return m.channel.send(`${no} **HATA** ${no} - Birisini Etiketle`)
     if(u === m.author) return m.channel.send(`${no} **HATA** ${no} - Yav yürü git kendini soyamazsın`)
     if(u.id === sahip) return m.channel.send(`${no} **HATA** ${no} - Yav yürü git sahibimi soyamazsın`)
      let coin = db.fetch(`coin.${u.id}`)
      let coinx = db.fetch(`coin.${m.author.id}`)
      if(coinx < 0) return m.channel.send(`${no} **HATA** ${no} - Biraz dahi paran yokmu`)
      if(!coin) return m.channel.send(`${no} **HATA** ${no} - Bunda para yok`)
      let miktar = getRandomInt('1', coin / 2)
      let miktarx = getRandomInt('1', coinx / 2)
      let secenek = getRandomInt('1', '10')
     let embed = new Discord.MessageEmbed()
     let timeout = 43200000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`soy.${m.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        const yasa = new Discord.MessageEmbed()
        .setDescription(`Günlük ödülün için **${time.hours} saat**, **${time.minutes} dakika**, **${time.seconds} saniye** beklemelisin!`)
        m.channel.send(yasa)
    } else {
 if(secenek === 1 || secenek === 5) {
   db.set(`soy.${m.author.id}`,true)
    db.add(`coin.${u.id}`,miktarx)
   db.add(`coin.${m.author.id}`,-miktarx)
    embed.setDescription(`Soymaya giderken yakalandın ve ${u} senden ${miktarx} coinini aldı`)
m.channel.send(embed)
   }else{
   db.set(`soy.${m.author.id}`,true)
    db.add(`coin.${u.id}`,-miktar)
   db.add(`coin.${m.author.id}`,miktar)
    embed.setDescription(`${u} yu soydun ve ${miktar} parasını aldın`)
m.channel.send(embed)
   }
      
    }
}
}