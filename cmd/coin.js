const { MessageEmbed, Discord, Invite } = require('discord.js')
const data = require('quick.db')
const ayar = require('../ayarlar.json')

exports.run = async (client, message, member) => {
    if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)

   let erkek = data.fetch(`puan.${message.author.id}.ekayit`)
   let kadin = data.fetch(`puan.${message.author.id}.kkayit`)
   let tagli = data.fetch(`puan.${message.author.id}.tagaldir`)
   let coin = erkek + kadin + tagli

message.channel.send(new MessageEmbed()
.setDescription(`${message.author}, toplam \`${coin}\` coinin bulunuyor. Marketten bir şeyler satın almak istersen \`.market\` yazabilirsin.`).setTimestamp().setFooter(ayar.footer).setColor('0x2f3136'))}

exports.conf = {enabled: true, guildOnly: false, aliases: ['coinim', 'money', 'mymoney'], permLevel: 0}
exports.help = {name: "coin"}