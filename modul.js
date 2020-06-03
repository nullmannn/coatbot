const sm = require('string-similarity');

module.exports = {

    ping: function(client) {
     return `${Math.round(client.ws.ping)} ms`;
    },

    send: function(channel, message, timer) {
        channel = channel.channel || channel;
        
        channel.send(message).then(m => {
            if(isNaN(timer)) return "Girilen silinme süresi geçersiz.";
            if(!isNaN(timer)) m.delete({timeout:timer})
            // 1000 milisaniye = 1 saniye
        })
    },

    attachment: function(channel, message, url) {
        channel = channel.channel || channel;
        let isURL = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

        if(!isURL.test(url)) {
            return "Girilen URL (bağlantı) geçersiz.";
        }

        channel.send(message).then(m => {
            files: [url]
        })
    },

    send: function(channel, message, color, timer) {

        channel = channel.channel || channel;
        channel.send({embed: {
            description: message,
            color: color
        }}).then(m => {
            if(isNaN(timer)) return "Girilen silinme süresi geçersiz.";
            if(!isNaN(timer)) m.delete({timeout:timer});
        })

    },

    kick: function(guild, member, reason) {

        guild = guild.guild.cache || guild;
        let user = guild.members.cache.get(member)
        user.kick(reason)

    },
    
    ban: function(guild, member, reason) {

   guild = guild
        let user = guild.members.cache.get(member)
        guild.members.ban(user, {reason: reason})
// sa dızlamaya geldim
    },

    createChannel: function(guild, name, type, topic) {

        guild = guild.guild || guild;
        guild.createChannel(name, type).then(ch =>{
            ch.setTopic(topic)
        })

    },

    modifyChannel: function(channel, name, topic, nsfw) {
        
        channel = channel.channel || channel;

       if(name === "") {
            name = channel.name
        } 
        if(topic === "") {
            topic = channel.topic 
        }
        if(nsfw === "") {
            nsfw = false;
        }
            channel.setName(name).then(()=>{
            channel.setTopic(topic).then(()=>{
            channel.setNSFW(nsfw)
        })
        })
    },

    guildInfo: function(guild) {
guild = guild.guild || guild;
        return `
Sunucu Adı: ${guild.name}
Sunucudaki Kanal Sayısı: ${guild.channels.cache.size}
Sunucudaki Üye Sayısı: ${guild.members.cache.size}
Sunucu Bölgesi: ${guild.region}`;
    },

    autocomplete: function(message, string) {
  let members = [];
  let indexes = [];

  message.guild.members.cache.each(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  });
  
  let match = sm.findBestMatch(string, members);
  let username = match.bestMatch.target;
  let member = message.guild.members.cache.get(indexes[members.indexOf(username)]).id;
    return member;
  },
  
    arama: function(message, string) {
  let members = [];
  let indexes = [];

  message.guild.members.cache.each(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  });
  
  let match = sm.findBestMatch(string, members);
  let username = match.bestMatch.target;
  let member = message.guild.members.cache.get(indexes[members.indexOf(username)]);
    return member;
  },
  
    rolarama: function(message, string) {
  let members = [];
  let indexes = [];

  message.guild.roles.forEach(function(role){
    members.push(role.name);
    indexes.push(role.id);
  });
  
  let match = sm.findBestMatch(string, members);
  let name = match.bestMatch.target;
  let member = message.guild.roles.cache.get(indexes[members.indexOf(name)]);
    return member;
  }

}