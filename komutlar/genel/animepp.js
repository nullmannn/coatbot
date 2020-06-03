
module.exports = {
  
  name: 'animepp',
  aliases: 'anime-pp',
  category: 'genel',
  
  run: async(app, message, args) => {
const superagent = require("superagent");
const {body} = await superagent.get("https://rensapi.glitch.me/api/animepps");
  let resim = body.x
  const Discord = require("discord.js")
  let embed = new Discord.MessageEmbed() .setImage(resim)  

message.channel.send(embed)
    

}
}