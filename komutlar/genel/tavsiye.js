  
const Discord = require('discord.js');
module.exports = {
    name: 'tavsiye',
    aliases: ['öneri'],
    category: 'bot',

    run: (client, m, args, ayarlar) => {
    let owner = client.users.cache.get(ayarlar.sahip);
        let tik = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
      let cross = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
  if(!args[0]) return m.channel.send(`${cross}**Hata**${cross} - Bir tavsiye yazman gerek`)
      const a = new Discord.MessageEmbed()
    .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`\`\`\`Yeni Tavsiye\`\`\`

**Kullanıcı ;**
${m.author.tag}

**Tavsiye ;**
${args.join(" ")}
`)
 .setThumbnail(m.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
         const b = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
    .setDescription(`Tavsiyeni [Destek Sunucumda Paylaştım](https://discord.gg/2pEZ9Vs) Eğer Tavsiyeniz Gereksiz İse Kara Listeye Alınırsınız
`)
       .setFooter(`Herhangi bir sorunda sunucumuza gelip ${owner.tag} a sorabilirsiniz`)
  
      client.channels.cache.get("715661228541739099").send(a).then(q => {
        q.react(tik)
        q.react(cross)
      })
      m.channel.send(b)
       }
};