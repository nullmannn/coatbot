const Discord = require("discord.js");

module.exports = {
  
  name: 'sigara',
  aliases: 'sigara',
  category: 'genel',
  
  run: async(client, message, args) => {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Ohh, çek çek yarasın koçuma.')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/551783071360483329/570685052049031206/tumblr_nqbbd4W9Rr1s8qfmlo1_500.gif`)
    return message.channel.send(sunucubilgi);
    
}
}
 