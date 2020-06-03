let db = require("quick.db");
let Discord = require("discord.js");

module.exports = {
  name: "liderlik",
  aliases: "",
  category: "genel",

  run: async (app, m, args) => {
      let durum = db.fetch(`levelayar.${m.guild.id}.durum`)  
      let no = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     if(!durum) return m.channel.send(`${no}**HATA**${no} - Seviye sistemi açık değil`)
    
       function getLevel(level) {
      let last = 0;
      let xp = 0;

      for(let i = 1; i <= (level - 1); i++) {
        last += 1;
        i += (last - 1);
      }

      for(let i = 1; i <= last; i++) {
        xp += (i * 100);
      }

      return {
        "level": last,
        "xp": (last != 0) ? (xp - ((last - 2) * 100)) : false
      };
    }

    let u = m.mentions.users.first() || m.author;
    let xp = db.fetch(`xp.${u.id + m.guild.id}`) || 0;
    let lvl = db.fetch(`lvl.${u.id + m.guild.id}`) || 0;

    const sorted = m.guild.members.cache
       .filter(u => !u.user.bot)
     .array()
      .sort((a, b) => {
        return (
          (db.fetch(`lvlxp.${b.user.id + m.guild.id}`) || 0) -
          (db.fetch(`lvlxp.${a.user.id + m.guild.id}`) || 0)
        );
      });
    
    
   const embed = new Discord.MessageEmbed()
      .setTitle(`Liderlik Sıralama`)
      .setDescription(`\`\`\`
${sorted.slice(0, 10).map((a, i) => i + 1 + ` :: ${a.user.tag}`).join("\n")}
\`\`\``)
    .setFooter(`Coat Discord Bot`)
      .setThumbnail("https://cdn.discordapp.com/attachments/714218979035578372/715510949192269924/1590613093202.png");
    m.channel.send(embed);
  }
};
