  
const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
    name: 'yardım',
    aliases: ['help'],
    category: 'bot',

    run: (client, m, args, ayarlar, prefix) => {
          let x = Date.now() - m.createdTimestamp
let s = args.join(" ")
//** ▸ ${prefix} =** 
if(s === "genel") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}animepp =** Anime ppler atar
** ▸ ${prefix}kullanıcıbilgi =** Kullanıcı Profilini Gösterir
** ▸ ${prefix}sunucubilgi =** Sunucu Hakkında Bilgi Verir
** ▸ ${prefix}bilgi =** Botun bilgilerini gösterir
** ▸ ${prefix}ping =** Botun Pingini Gösterir
** ▸ ${prefix}tavsiye =** Bota tavsiyede bulunursunuz
** ▸ ${prefix}davet =** Botun linkleri`)
 .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/2pEZ9Vs) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${x} gecikme hızı ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "ekonomi") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`
** ▸ ${prefix}profil =** Profiliniz
** ▸ ${prefix}transfer =** Para aktarırsınız
** ▸ ${prefix}mana =** Yakında harika komultarda gerekli olacak malzeme
** ▸ ${prefix}soy =** Birisini soyarsın
** ▸ ${prefix}günlük =** Günlük paranı alirs
** ▸ ${prefix}demirkasa =** Demir Kasa Açarsın
** ▸ ${prefix}altınkasa =** Altın Kasa Açarsın
** ▸ ${prefix}elmaskasa =** Elmas Kasa Açarsın
** ▸ ${prefix}efsanevikasa =** Efsanevi Kasa Açarsın
** ▸ ${prefix}market =** Market`)
 .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/2pEZ9Vs) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${x} gecikme hızı ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "yetkili") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}kick =** Sunucudan belirtilen kişiyi atar
** ▸ ${prefix}ban =** Sunucudan belirtilen kişiyi banlar
** ▸ ${prefix}otorol =** Sunucuya girene rol verir
** ▸ ${prefix}sayac =** Sunucuya giren çıkanları belli kanala atar
** ▸ ${prefix}sil =** Belirlenen miktar kadar mesajı siler
** ▸ ${prefix}reklam-engel =** Reklam engelleme sistemi
** ▸ ${prefix}reklamengel-kapat =** Reklam engeli kapatır
** ▸ ${prefix}otorol-kapat =** Otorolü kapatır
** ▸ ${prefix}sayac-kapat =** Sayaçı kapatır`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/2pEZ9Vs) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${x} gecikme hızı ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "eğlence") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}vur =** Belirtilen kişiye vurur
** ▸ ${prefix}clyde =** Clyde yazı yazar
** ▸ ${prefix}aşkölçer =** Aşkına bakmaya hazırmısın?
** ▸ ${prefix}fbi =** Fbi open the door
** ▸ ${prefix}sigara =** Çek bir sigara
** ▸ ${prefix}dünya =** Dünyamız
`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/2pEZ9Vs) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${x} gecikme hızı ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "level") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}level =** Levelinizi gösterir
** ▸ ${prefix}liderlik =** Level sıralamasını gösterir
** ▸ ${prefix}lvl ayar =** Level sistemini açıp kapatır
** ▸ ${prefix}lvl logkanal =** Biri seviye atlayınca belirlenen kanala atar
** ▸ ${prefix}lvl kanalizin =** Belirtilen kanalda level almayı kapatır açar
** ▸ ${prefix}lvl mesaj =** Level Atladı Yazısını Açar Kapatır`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/2pEZ9Vs) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${x} gecikme hızı ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else{
    const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`c?yardım <Kategori> ile belirtilen kategorideki komutları görüntüleyebilirsiniz.`)
   .addField(`Kategoriler`,"`yetkili`,`genel`,`eğlence`,`level`,`ekonomi`",true)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/2pEZ9Vs) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${x} gecikme hızı ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}
    }
};