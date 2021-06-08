const { MessageEmbed } = require("discord.js")
const data = require('quick.db')
const ayar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let kullanici = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if (!kullanici) return message.react(ayar.no)
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    let rol = message.mentions.roles.first()
    let member = message.guild.member(kullanici)

    const argüman = args[0]
    if (!argüman) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .addField(`${ayar.dikkat} Şuanda sistemsel bir hatayla karşı karşıya bulunuyorsunuz, lütfen \`Mavera.#1970\` kişisine arkadaşlık atarak destek alabilirsiniz.`)
        .setFooter(ayar.footer))}

    if (argüman == "ver") {
  
    member.roles.add(ayar.yetkili)
    member.roles.add(ayar.yetkili2)
    data.add(`puan.${message.author.id}.ycek`, 20)
    data.add(`ysayi.${message.author.id}.toplam`, 1)

  let embedx = new Discord.MessageEmbed() 
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription(`${ayar.yes} ${member} kullanıcısına <@&${ayar.yetkili}>, <@&${ayar.yetkili2}> rolleri verildi.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}

    if (argüman == "al") {

    member.roles.remove(ayar.yetkili);
    member.roles.remove(ayar.yetkili2)
    data.remove(`puan.${message.author.id}.ycek`, 20)
    data.remove(`ysayi.${message.author.id}.toplam`, 1)

  let embedx = new Discord.MessageEmbed() 
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription(`${ayar.no} ${member} kullanıcısından <@&${ayar.yetkili}>, <@&${ayar.yetkili2}> rolleri alındı.`)
  .setFooter(ayar.footer)
        message.channel.send(embedx).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 9999 }))}}

exports.conf = {enabled: true, guildOnly: false, aliases: ['staff', 'mod'], permLevel: 0}
exports.help = {name: "yetki"}