
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'market',
    aliases: ['market'],
    category: 'bot',

    run: (client, m, args, ayarlar) => {
     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
const ms = require('ms')
 let prefix = ayarlar.prefix
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
  .setDescription(`
\`\`\`
KASALAR\`\`\`
** ▸ ${prefix}demirkasa =** İçinden 1 - 3 gün arası üyelik çıkar( 10k )
** ▸ ${prefix}altınkasa =** İçinden 1 - 6 gün arası üyelik çıkar( 20k )
** ▸ ${prefix}elmaskasa =** İcinden 1 - 15 gün arası üyelik çıkar( 25k )
** ▸ ${prefix}efsanevikasa =** İçinden 15 - 30 gün arası üyelik çıkar( 50k )
\`\`\`
EKLER\`\`\`
** ▸ ${prefix}mana =** 10lu mana paketi alırsın
`)
    m.channel.send(yardim)
}
}