
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'eval',
    aliases: ['console'],
    category: 'bot',

    run: (client, message, args, ayarlar) => {
      let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
        const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Sahibim veya Geliştiricim Değilsin`)
    
  const commonTags = require("common-tags");
  const util = require("util");
   let { MessageEmbed } = require("discord.js");
    if (!ayarlar.gelistiriciler.includes(message.author.id)) {
      message.channel.send(member3);
      return;
    }
    function cleanText(text) {
      if (typeof text === "string") {
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      } else {
        return text;
      }
    }

    try {
      let executedIn = process.hrtime();
      let result = eval(args.join(" "));
      result = cleanText(result);
      result = util.inspect(result);
      executedIn = process.hrtime(executedIn);
      executedIn =
        executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);

      let embed = new MessageEmbed();
         embed.setColor("CYAN")
      embed.setDescription(commonTags.stripIndents`
      ${executedIn.toFixed(3)} milisaniyede çalıştırıldı
      \`\`\`js
        ${result}\`\`\`
    `);
      message.channel.send({ embed });
    } catch (error) {
      let embed = new MessageEmbed();
      embed.setDescription(commonTags.stripIndents`
      ${no} Hata Çıktı ${no}
      \`\`\`js
      ${cleanText(error)}\`\`\`
    `);
        embed.setColor("CYAN")
 message.channel.send({ embed });
    }
  
}
}