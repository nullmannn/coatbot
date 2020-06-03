
module.exports = {
  
  name: 'vur',
  aliases: 'vur',
  category: 'genel',
  
  run: async(client, m, args, a) => {
    /*
    let Discord = require("discord.js")
 let tokatlar = ["https://cdn.discordapp.com/attachments/571348174640381987/710937623371186176/c029e7cebdf632468e35ab903d1b331e.gif","https://cdn.discordapp.com/attachments/702497684501692417/710940476739420200/sozlukten-birini-tokatlamak_2011697.gif","https://cdn.discordapp.com/attachments/702497684501692417/710940489960128572/ucan-tekme_1730942.gif","https://cdn.discordapp.com/attachments/710894854607077437/710939313965105282/KdXVEQ.gif"]
    var tokat = tokatlar[Math.floor((Math.random() * tokatlar.length))];
  let user = m.mentions.users.first()
    if(!user) return m.channel.send("Kullanıcı etiketle")
   
    
    if(tokat === "https://cdn.discordapp.com/attachments/702497684501692417/710940476739420200/sozlukten-birini-tokatlamak_2011697.gif") {
    let e = new Discord.MessageEmbed()
    .setTitle(`${m.author.tag} al işte vuramadın`)
   .setImage(tokat)
    m.channel.send(e)
 
    }else{
    
    let e = new Discord.MessageEmbed()
    .setTitle(`${m.author.tag} adlı kullanıcı ${user.tag} a vurdu`)
   .setImage(tokat)
    m.channel.send(e)
    }   
    */
    const Discord = require('discord.js');
//const { Canvas } = require("canvas");
const path = require('path');
const snekfetch = require('snekfetch');
    var user = m.mentions.users.first();
        if(!user) return m.channel.send('Kime vurucan.')
        if(user.id === a.sahip) return m.channel.send('Sen hayırdır bir kodumu uçarsın.')
         if(user.id === client.user.id) return m.channel.send('Sen hayırdır bir koysam uçarsın.')
        var Canvas = require('canvas')
        var canvas = Canvas.createCanvas(1200, 1200)
        var ctx = canvas.getContext('2d');
        const { body: mentionedBuffer } = await snekfetch.get(user.displayAvatarURL({format:"png"}))
        const avatar = await Canvas.loadImage(mentionedBuffer);
        const vuran = await Canvas.loadImage(m.author.displayAvatarURL({format:"png"}));
        const arka = await Canvas.loadImage('https://cdn.discordapp.com/attachments/571996841382772736/710973616694624316/kimkimitokatliyo.jpg');
  ctx.drawImage(arka , 0 , 0);
  ctx.strokeStyle = '#3F51B5';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#3F51B5';
  ctx.shadowBlur = 3;
  ctx.beginPath();
  ctx.arc(650, 170, 150, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.save();
  ctx.clip();
  ctx.drawImage(vuran, 500, 20, 300, 300);
  ctx.restore();
  ctx.strokeStyle = '#3F51B5';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#3F51B5';
  ctx.shadowBlur = 3;
  ctx.beginPath();
  ctx.arc(160, 570, 150, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.save();
  ctx.clip();
  ctx.drawImage(avatar, 10, 420, 300, 300);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "coat-vur.png");

  m.channel.send(attachment)
  


    
}
}