const Discord = require('discord.js')

module.exports = {
  
  name: 'aşkölçer',
  aliases: ['askolcer'],
  category: 'genel',
  
  run: async(client, message, args) => {

 let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Bir Kişi Etiketlemelisin.`)
    .setAuthor('Hata')
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `💔`
        }
    } else {
        var kalp = '💔'
        var akalp = '💔💔💔💔💔💔💔💔💔'
    }
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.tag} ve ${s.tag} arasındaki aşk sonucu.`)
        .setDescription(`Aranızdaki aşk seviyesi: **%${anasonuc}**
\`${kalp}${akalp}\``)
  .setColor(0x36393E)
        .setTimestamp()
    message.channel.send({embed})
}
}