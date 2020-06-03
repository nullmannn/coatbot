
module.exports = {
  
  name: 'kullanıcıbilgi',
  aliases: 'kb',
  category: 'genel',
  
  run: async(app, m, args) => {
    const Discord = require('discord.js');
const moment = require("moment")
require("moment-duration-format")
const dateFormat = require("dateformat")

let use;
  if (m.mentions.users.first()) {
      use = m.mentions.users.first();
    } else {
        use = m.author;
    }
 let mx = m.guild.member(use);
 let oynuyor;
if((use.presence.activities.length != 0) && (use.presence.activities[0].name == "Custom Status")) {
  oynuyor = `${use.presence.activities[0].state || `Sadece Emoji Bulunuyor !`}`;
} else if(use.presence.activities.length != 0) {
  oynuyor = use.presence.activities[0].name;
}else{
  oynuyor = "Herhangi Bir Oynuyoru Yok"
}
  var durum = ''
  if (use.presence.status === "dnd") {
  var durum = 'Rahatsız Etmeyin'
  }
  if (use.presence.status === "offline") {
  var durum = 'Görünmez / Çevrimdışı'
  }
  if (use.presence.status === "idle") {
  var durum = 'Boşta'
  }
  if (use.presence.status === "online") {
  var durum = 'Aktif'
  }
    
      const millisCreated = new Date().getTime() - use.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - mx.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    
    let embed = new Discord.MessageEmbed() 
    .setColor("#FFD600")
    .setTimestamp() 
    .setThumbnail(use.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`**${use.tag}** Adlı Kişinin Profili`)
    .setDescription(`
**Aktiflik Durumu ;** 
${durum}

**Oynuyor / Custom ;**
${oynuyor}

**Avatar**
[PNG](${m.author.avatarURL({format:"png"})}) **|** [GİF](${m.author.avatarURL({format:"png"})})

**Sunucu Katılım Tarihi ;** 
${userJoined}

**Discord Katılım Tarihi ;** 
${daysCreated}`)
  
m.channel.send(embed)
  
    }
}
