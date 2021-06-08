const { MessageEmbed } = require("discord.js");
const ayarlar = require('../ayarlar.json')

module.exports.run = (client, message, args) => {

if(![(ayarlar.yetkili)].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)
    
let tag = "✫";
const bsayi = message.guild.premiumSubscriptionCount 
const blevel = message.guild.premiumTier
const tagges = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
const toplam = message.guild.memberCount
const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

const embed = new MessageEmbed()
.setColor('BLACK')
 .setDescription(`
\`>\` Sunucumuzda toplam \`${toplam}\` üye bulunmaktadır!
\`>\` Tagımızda toplam \`${tagges}\` kullanıcı bulunmaktadır!
\`>\` Ses kanallarında \`${ses}\` kişi mevcut!
\`>\` Sunucumuzda \`${bsayi}\` boost bulunuyor!
`).setFooter(ayar.footer).setTimestamp()
message.channel.send(embed)}

exports.conf = {enabled: true, guildOnly: false, aliases: [], permLevel: 0}
exports.help = {name: 'say'}