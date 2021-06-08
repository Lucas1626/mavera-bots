const { MessageEmbed } = require("discord.js")
const ayar = require ("../ayarlar.json")

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has(ayar.yetkili) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
let embed = new MessageEmbed().setColor('RANDOM')
 
if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.react(ayar.no)
  
  await message.delete().catch()
  
  message.channel.bulkDelete(Number(args[0])).then(msjlar => message.react(ayar.yes).then(x => x.delete({timeout: 5000}))).catch()}

  exports.conf = {enabled: true, guildOnly: true, aliases: ['temizle', 'clear'], permLevel: 0}
  exports.help = {name: 'sil'}