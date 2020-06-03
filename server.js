const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const ayarlar = require("./ayarlar.json");
const db = require("quick.db")
const app = new Client({
  disableEveryone: true
});

app.commands = new Collection();
app.aliases = new Collection();

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(app);
});

////////--Bot Oynuyor Kısmı--////////

const express = require('express');
const expres = express();
const http = require('http');
    expres.get("/", (request, response) => {
    console.log(`Ping Tamam. `);
    response.sendStatus(200);
    })
   expres.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

app.on("ready", () => {
  console.log(`${app.user.username} Aktif!`);

  app.user.setPresence({
    status: "online",
    game: {
      name: "Yapılıyor", //botun oynuyor kısmı
      type: "PLAYING"
    }
  });
});

app.on("ready", function() {
  app.users.cache.forEach(üye => {
    setInterval(() => {
      let x = db.fetch(`vipsure.${üye.id}`); // bu sürede bitecek (timestamp)
      let cc = db.has(`vipsure.${üye.id}`); // bu sürede bitecek (timestamp)
    if(cc === true) {
    if(x < Date.now()) {
             let gold = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'pre');
db.delete(`vip.${üye.id}`);
db.delete(`vipsure.${üye.id}`);
      let embed = new Discord.MessageEmbed() 
.setColor("#FFEE58") 
.setDescription(`${gold} Gold Üyen Bitti Almak İçin Kurucuma Ulaş`)
      let embe = new Discord.MessageEmbed() 
.setColor("#FFEE58") 
.setDescription(`${gold} ${üye.tag} Adlı kullanıcının vip üyeliği bitti`)
app.users.cache.get(üye.id).send(embed);
app.channels.cache.get("716012277844672524").send(embe);

      }
}else{
}    }, 500)
  })
})
////////--Bot Oynuyor Kısmı--////////
   
app.on("message", async m => {
  let up = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'iyi');
      let izin = db.fetch(`levelayar.${m.guild.id}.kanalizin.${m.channel.id}`)
         let log = db.fetch(`levelayar.${m.guild.id}.log`)
         let mesaj = db.fetch(`levelayar.${m.guild.id}.mesaj`)
         let durum = db.fetch(`levelayar.${m.guild.id}.durum`)
        if(!durum) return ;
        if(izin) return ;
  if (m.channel.type === "dm") return;
  if(m.author.bot) return;  
     
    let xp = db.fetch(`xp.${m.author.id + m.guild.id}`) || 0;
    let lvl = db.fetch(`lvl.${m.author.id + m.guild.id}`) || 0;
 db.add(`xp.${m.author.id + m.guild.id}`, 2)
 db.add(`lvlxp.${m.author.id + m.guild.id}`, 1)
if(xp > lvl * 100) {
 db.add(`lvlxp.${m.author.id + m.guild.id}`, 1)
 db.delete(`xp.${m.author.id + m.guild.id}`)
 db.add(`lvl.${m.author.id + m.guild.id}`, 1)
  if(!mesaj) {
    let embed = new Discord.MessageEmbed()
      .setDescription(`${up} **${m.author} seviye atladın yeni seviyen \`${lvl}\`**`)
m.channel.send(embed)
  }else{
    
  }
  if(log) {
    
    let embed = new Discord.MessageEmbed()
      .setDescription(`${up} **${m.author} seviye atladı yeni seviyesi \`${lvl}\`**`)
app.channels.cache.get(log).send(embed)
  }else{
    
  }
}
});
app.on("message", async message => {
  const prefix = ayarlar.prefix;

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = app.commands.get(cmd);
  if (!command) command = app.commands.get(app.aliases.get(cmd));

  let modul = require("./modul.js")
  if (command) command.run(app, message, args, ayarlar, `c?` , modul);
});

  const { get } = require("snekfetch");
   const { Canvas } = require('canvas-constructor');
const { loadImage } = require('canvas')
app.on("guildMemberAdd", async member => {  
  let fontSize = 50;


  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		ctx.font = `${fontSize -= 7}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
   let kanal = db.fetch(`hgbb.{member.guild.id}`)
         if(!kanal) return ;
   let gonder = app.channels.cache.get(kanal)
       if(!gonder) return ;
 const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(738,461);
    const ctx = canvas.getContext('2d');
  let resim = "https://cdn.discordapp.com/attachments/716301791641468938/716366694070747286/unnamed.jpg"
  const background = await Canvas.loadImage(resim);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(member.displayAvatarURL({format: "jpg"}));
   // ctx.fillStyle = "rgba(0, 0, 0, 0.27)";
    ctx.fill()
   // ctx.fillRect(10, 10 ,710, 440)  
    ctx.fillStyle = "#fff"
    ctx.font = '60px serif';
    ctx.fillText('Kullanıcı Katıldı!', 140, 360, 500);
   // ctx.fillStyle = "#263238"
    ctx.font = applyText(canvas, `${member.tag}`);
	  ctx.fillText(`${member.tag}`, 200, 430);
	  ctx.font = applyText(canvas, `${member.tag}`);
	  ctx.fillStyle = '#ffffff';
	  ctx.fillText(`${member.tag}`, 200, 430);
    ctx.font = '30pt Impact';
   // ctx.fillStyle = "#263238"
    ctx.fill()
    ctx.beginPath();
    ctx.ellipse(360, 170, 140, 140, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(avatar, 220, 20, 290, 290);
   const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "coat-vur.png");
 
gonder.send(attachment);
     
})
app.on("guildMemberRemove", async member => {  
  let fontSize = 50;


  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		ctx.font = `${fontSize -= 7}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
  let kanal = db.fetch(`hgbb.{member.guild.id}`)
     if(!kanal) return ;
       let gonder = app.channels.cache.get(kanal)
      if(!gonder) return ;
  const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(738,461);
    const ctx = canvas.getContext('2d');
  let resim = "https://cdn.discordapp.com/attachments/716301791641468938/716366694070747286/unnamed.jpg"
  const background = await Canvas.loadImage(resim);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(member.displayAvatarURL({format: "jpg"}));
   // ctx.fillStyle = "rgba(0, 0, 0, 0.27)";
    ctx.fill()
   // ctx.fillRect(10, 10 ,710, 440)  
    ctx.fillStyle = "#fff"
    ctx.font = '60px serif';
    ctx.fillText('Kullanıcı Ayrıldı!', 140, 360, 500);
   // ctx.fillStyle = "#263238"
    ctx.font = applyText(canvas, `${member.tag}`);
	  ctx.fillText(`${member.tag}`, 200, 430);
	  ctx.font = applyText(canvas, `${member.tag}`);
	  ctx.fillStyle = '#ffffff';
	  ctx.fillText(`${member.tag}`, 200, 430);
    ctx.font = '30pt Impact';
   // ctx.fillStyle = "#263238"
    ctx.fill()
    ctx.beginPath();
    ctx.ellipse(360, 170, 140, 140, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(avatar, 220, 20, 290, 290);
   const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "coat-vur.png");
 
      gonder.send(attachment);
     
})
      
app.on("guildMemberAdd",async member => {
  let uye = member.guild.memberCount
  let hedef = db.fetch(`sayac.${member.guild.id}.sayi`)
  let kanal = db.fetch(`sayac.${member.guild.id}.kanal`)
  let kalan = parseInt(member.guild.memberCount) - parseInt(hedef)
 if(!hedef) return ;
  if(!kanal) return ;
  if(uye === hedef) {
    db.delete(`sayac.${member.guild.id}`)
    const embed = new Discord.MessageEmbed()
  .addFields({
    name:`Sonunda ${uye} olduk`,
    value:`${member.user.username} adlı kullanıcı katıldı ve hedef sayımıza ulaştık`
  })
  app.channels.cache.get(kanal).send(embed)
    
  }else{
    const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Katıldı",
    value:`${member.user.username} adlı kullanıcı katıldı artık ${member.guild.memberCount} kişiyiz ${hedef} kişi olmamıza ${hedef - member.guild.memberCount} kişi kaldı`
  })
  app.channels.cache.get(kanal).send(embed)
  }
})
app.on("guildMemberAdd",async member => {
  let uye = member.guild.memberCount
  let rol = db.fetch(`otorol.${member.guild.id}.rol`)
  let kanal = db.fetch(`otorol.${member.guild.id}.kanal`)
   if(!rol) return ;
  if(!kanal) return ;
  member.roles.add(rol)
  const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Katıldı",
    value:`${member.user.username} sunucumuza katıldı ve ayarlanmış olan rolü verdim sunucu artık ${uye} kişi`
  })
  app.channels.cache.get(kanal).send(embed)
  
})
 app.on("guildMemberRemove",async member => {
  let hedef = db.fetch(`sayac.${member.guild.id}.sayi`)
  let kanal = db.fetch(`sayac.${member.guild.id}.kanal`)
  let kalan = parseInt(member.guild.memberCount) - parseInt(hedef)
   if(!hedef) return ;
  if(!kanal) return ;
  const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Ayrıldı",
    value:`${member.user.username} adlı kullanıcı ayrıldı artık ${member.guild.memberCount} kişiyiz ${hedef} kişi olmamıza ${hedef - member.guild.memberCount} kişi kaldı`
  })
  app.channels.cache.get(kanal).send(embed)
})
   
const reklam = [
        ".com",
        ".net",
        ".xyz",
        ".tk",
        ".pw",
        ".io",
        ".me",
        ".gg",
        "www.",
        "https",
        "http",
        ".gl",
        ".org",
        ".com.tr",
        ".biz",
        "net",
        ".rf",
        ".gd",
        ".az",
        ".party"
      ];
app.on("messageUpdate", async (old, nev) => {
  let hyr = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'uyari');
    if (old.content != nev.content) {
    let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
   if (i) {
      
      if (reklam.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return ;
            nev.delete();
            const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} ${nev.author} , **Mesajı Editleyerek Reklam Yapamana İzin Veremem !**`)
            return nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
          
      }
    } else {
    }
    if (!i) return;
  }
});

app.on("message", async msg => {
 let hyr = app.guilds.cache.get("714204056092147824").emojis.cache.find(emoji => emoji.name === 'uyari');
     
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
          if (i) {
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();
                    const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} <@${msg.author.id}> , **Bu Sunucuda Reklam Yapmak Yasak !**`)
                    return msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
         if(!i) return ;
});

app.on('channelDelete', async channel => {
  
  let kanal = db.fetch(`kanalkoruma.${channel.guild.id}`)
  if(!kanal) return ;
           const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
if (entry.executor.id == channel.guild.owner.id) return;
    if (entry.executor.id == app.user.id ) return;
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle('Kanal Kuruldu')
  .setDescription(`**\`${channel.name}\` Adlı kanalı kanal koruma açık olduğu için tekrar oluşturdum.**`)
 
   app.channels.cache.get(kanal).send(embed)
 channel.guild.channels.create(channel.name , {type:channel.type}).then(kanalcik => {
if(channel.parent) return kanalcik.setParent(channel.parent)
})
 
  })
app.on('channelCreate', async channel => {
  
  let kanal = db.fetch(`kanalkoruma.${channel.guild.id}`)
  if(!kanal) return ;
           const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
  if (entry.executor.id === channel.guild.owner.id) return;
    if (entry.executor.id == app.user.id) return;
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle('Kanal Silindi')
  .setDescription(`**\`${channel.name}\` Adlı kanal olustu ve kanal koruma açık olduğu için silindi.**`)
 
   app.channels.cache.get(kanal).send(embed)
 channel.delete()
 
  })

app.on("message", async message => {
  if (message.content === "c?katil") {
    app.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

app.on("message", async message => {
  if (message.content === "c?ayril") {
    app.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

app.login(ayarlar.token);
