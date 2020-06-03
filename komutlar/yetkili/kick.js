module.exports = {

    name: 'at',
    aliases: ['kick'],
    category: 'moderation',

    run: (app, message, args) => {
    
      let Discord = require("discord.js")
       let no = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
       const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
        if (!message.member.hasPermission("KİCK_MEMBERS")) return message.chnanrl.send(member3)
       
        let user = message.mentions.users.first();
        let member = message.guild.member(user);
       
        if(!member) return message.channel.send(`${no} **Hata** ${no} - Bir üye belirtebilirmisin`)
        if(!args[1]) return message.channel.send(`${no} **Hata** ${no} - Bir sebep belirtebilirmisin`)
       app.users.cache.get(user.id).send(`${args.join(" ").slice(1)} sebebi ile ${message.guild.name} adlı sunucudan atıldın`)
        member.kick({
          reason: args.join(" ").slice(1)
        })

        message.channel.send(`${member} başarılı bir şekilde sunucudan atıldı.`)
    }
}