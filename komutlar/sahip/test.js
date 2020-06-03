
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
  /*const { get } = require("snekfetch");
   const { Canvas } = require('canvas-constructor');
const { loadImage } = require('canvas')
*/
module.exports = {
    name: 'test',
    aliases: ['t'],
    category: 'bot',

    run: async (client, message, args, ayarlar) => {

     let hyr = client.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'cross');
     let gold = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
     const ms = require('ms')
     //sa
     let user;
      if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  	let fontSize = 50;




// if(m.author.id != ayarlar.sahip) { return m.channel.send(`${hyr} Sahibimin Komutunu Kullanamazsın`)}
      
  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 7}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
     //if(!db.has(`hoşgeldinK_{member.guild.id}`) === true) {
  const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(738,461);
    const ctx = canvas.getContext('2d');
  let resim = "https://cdn.discordapp.com/attachments/716301791641468938/716366694070747286/unnamed.jpg"
  const background = await Canvas.loadImage(resim);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.displayAvatarURL({format: "jpg"}));
   // ctx.fillStyle = "rgba(0, 0, 0, 0.27)";
    ctx.fill()
   // ctx.fillRect(10, 10 ,710, 440)  
    ctx.fillStyle = "#fff"
    ctx.font = '60px serif';
    ctx.fillText('Kullanıcı Ayrıldı!', 140, 360, 500);
   // ctx.fillStyle = "#263238"
    ctx.font = applyText(canvas, `${user.tag}`);
	  ctx.fillText(`${user.tag}`, 200, 430);
	  ctx.font = applyText(canvas, `${user.tag}`);
	  ctx.fillStyle = '#ffffff';
	  ctx.fillText(`${user.tag}`, 200, 430);
    ctx.font = '30pt Impact';
   // ctx.fillStyle = "#263238"
    ctx.fill()
    ctx.beginPath();
    ctx.ellipse(360, 170, 140, 140, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(avatar, 220, 20, 290, 290);
   const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "coat-vur.png");
 
  message.channel.send(attachment)
  
        }
                
                }


  