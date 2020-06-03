
module.exports = {
  
  name: 'sunucubilgi',
  aliases: ["sb"],
  category: 'genel',
  
  run: async(app, m, args) => {
    const Discord = require('discord.js');
const moment = require("moment")
require("moment-duration-format")
const dateFormat = require("dateformat")

      const millisCreated = new Date().getTime() - m.guild.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const afk = m.guild.afkTimeout+ "saniye"
    let embed = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`**${m.guild.name}** Sunucu Bilgi`)
    .setDescription(`
**Kurucusu ; **
${m.guild.owner}

**Üye sayısı ; **
${m.guild.memberCount}

**Kanal Sayısı ; **
${m.guild.channels.cache.size}

**Rol Sayısı ;**
${m.guild.roles.cache.size}

**Emoji Sayısı ; **
${m.guild.emojis.cache.size}

**Afk Zaman Aşımı / Kanalı ;**
${afk} / ${m.guild.afkChannel.name || `Bulunmuyor`}

**Kuruluş Süresi;** 
${daysCreated}`)
  
m.channel.send(embed)
  
    }
}
