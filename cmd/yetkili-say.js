const Discord = require("discord.js");
const ayar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(ayar.ysorumlu) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)

  let mavera = "`Ses kanalında bulunmayan yetkililer`\n";
  message.guild.roles.cache.get(ayar.yetkili).members.map(r => { mavera += !r.voice.channel ? "  <@" + r.user.id + ">" : "" })

  const aptulgalpmavera = ("" + mavera + ""); message.channel.send(aptulgalpmavera).then(x => x.x)}

exports.conf = {enabled: true, guildOnly: true, aliases: ['yetkilisay', 'ysay', 'y-say', 'ys'], permLevel: 0}
exports.help = {name: 'yetkili-say'}