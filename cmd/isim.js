const { MessageEmbed } = require('discord.js')
const ayar = require('../ayarlar.json')

exports.run =  async (client, message, args) => {

if(![(ayar.yetkili)].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)
  
  const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.react(ayar.no)
if(member.id === message.author.id) return message.react(ayar.no)
if(member.id === client.user.id) return message.react(ayar.no)
if(member.id === message.guild.OwnerID) return message.react(ayar.no)
if (member.hasPermission(8)) return message.react(ayar.no)
if(member.roles.highest.position >= message.member.roles.highest.position) return message.react(ayar.no)

let tag = ayar.tag
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(new MessageEmbed().setDescription(`Bir isim girmeyi unuttunuz. \`.i @Mavera/ID <İsim Yaş>\` `).setTimestamp().setFooter(ayar.footer))
if(!yas) return message.channel.send(new MessageEmbed().setDescription(`Bir yaş girmeyi unuttunuz. \`.i @Mavera/ID <İsim Yaş>\` `).setTimestamp().setFooter(ayar.footer))
member.setNickname(`${tag} ${isim} | ${yas}`)
message.react(ayar.yes)}

exports.conf = {enabled: true, guildOnly: true, aliases: ['i', 'nick', 'n'], permLevel: 0}
exports.help = {name: 'isim'}