  
const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
    name: 'bilgi',
    aliases: ['info'],
    category: 'bot',

    run: (client, m, args, ayarlar) => {
          let iyi = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'iyi');
      let kotu = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'kotu');

          let durum = ""
    if(700 > client.ws.ping) {
      durum = `(${iyi})`
    }else{
      durum = `(${kotu})`
    }
    let x = Date.now() - m.createdTimestamp
    let d = ""
    if(700 > x) {
      d = `(${iyi})`
    }else{
      d = `(${kotu})`
    }
      const moment = require("moment");
    require("moment-duration-format");
    const duration = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
    let owner = client.users.cache.get(ayarlar.sahip);
    
   let ok = "::"
  const a = new Discord.MessageEmbed()
    .setDescription(
      `\`\`\`${client.user.username} Bilgi\`\`\`
**
Calışma Sürem ${ok} ${duration}
Sunucu Sayım ${ok} ${client.guilds.cache.size}
Kullanıcı Sayım  ${ok} ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
Aktif Kullanicilar ${ok} ${client.users.cache.size}
Pingim   ${ok} ${client.ws.ping}ms${durum}
Gecikme ${ok}  ${x}ms${d}
Kurucum ${ok} ${owner} **|** ${owner.tag}
**`
    )
    
 m.channel.send(a)
  
    }
};