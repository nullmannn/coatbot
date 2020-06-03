const Discord = require('discord.js');
module.exports = {
  
  name: 'dünya',
  aliases: 'vur',
  category: 'genel',
  
  run: async(client, message, args) => {
    const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('İşte; milyarlarca hikâyeninin,\nmilyarlarca hayatın, milyarlarca\ngüzelliğin beraber olduğu o dünya.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.channel.send(sunucubilgi);
}
}