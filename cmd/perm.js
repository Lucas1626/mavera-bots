const { MessageEmbed } = require("discord.js")
const ayar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
  
    let kullanici = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let rol = message.mentions.roles.first()
    let member = message.guild.member(kullanici)

    const argüman = args[0]
    if (!argüman) {
    return message.channel.send(new MessageEmbed()
        .setColor("RED")
        .setTimestamp()
        .setDescription(`Bir kullanıcı etiketlemedin veya verilecek rolü yazmadın. \`.özel tasarım/müzisyen/vokal/ressam/vip/sponsor @Mavera/ID\``)
        .setFooter(ayar.footer))}

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (argüman == "tasarım") { if (!kullanici) return message.react(ayar.no)
    member.roles.add(ayar.tasarımcı)

  let embedx = new MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına <@&${ayar.tasarımcı}> rolü verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (argüman == "müzisyen") { if (!kullanici) return message.react(ayar.no)
    member.roles.add(ayar.müzisyen)

  let embedx = new MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına <@&${ayar.müzisyen}> rolü verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}
  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (argüman == "vokal") { if (!kullanici) return message.react(ayar.no)
    member.roles.add(ayar.vokal)

  let embedx = new MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına <@&${ayar.vokal}> rolü verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}
 
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (argüman == "ressam") { if (!kullanici) return message.react(ayar.no)
    member.roles.add(ayar.ressam);

  let embedx = new MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına <@&${ayar.ressam}> rolü verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (argüman == "vip") { if (!kullanici) return message.react(ayar.no)  
    member.roles.add(ayar.vip)

  let embedx = new MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına <@&${ayar.vip}> rolü verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}
  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (argüman == "sponsor") { if (!kullanici) return message.react(ayar.no)
    member.roles.add(ayar.sponsor);

  let embedx = new MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına <@&${ayar.sponsor}> rolü verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}}

exports.conf = {enabled: true, guildOnly: true, aliases: ['özel']}
exports.help = {name: 'perm'}