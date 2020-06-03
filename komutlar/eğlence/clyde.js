const Discord = require("discord.js");
const { get } = require("superagent");

module.exports = {
  
  name: 'clyde',
  aliases: 'vur',
  category: 'genel',
  
  run: async(client, message, args) => {
 let no = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
         const embed = new Discord.MessageEmbed()
      
    try {
      embed.setDescription(`${no}**HATA**${no} - Bir Mesaj Yazmalısın`)

        if(!args[0]){
message.channel.send(embed)
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed()
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 200);
        }); 
}catch(err) {
        console.log(err)    
    }
}
}