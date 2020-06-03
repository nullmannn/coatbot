module.exports = {
  
  name: 'reklamengel',
  aliases: ["reklam-engel"],
  category: 'moderaditon',
  
  run: (app, m, args) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let no = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
    let o = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'tik');
    let reklam = db.fetch(`reklam.${m.guild.id}.durum`)
    if(reklam) {
      db.delete(`reklam.${m.guild.id}.durum`)
      m.channel.send(`${o}**Başarılı**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`reklam.${m.guild.id}.durum`,true)
      m.channel.send(`${o}**Başarılı**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
}