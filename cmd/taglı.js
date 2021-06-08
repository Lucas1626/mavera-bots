const { MessageEmbed, Discord } = require('discord.js')
const db = require('quick.db')
const data = require('quick.db')
const tdb = new data.table('tag')
const ayar = require('../ayarlar.json')
 
  module.exports.run = async (client, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

 let embed = new MessageEmbed().setTimestamp().setColor("RANDOM")
  if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) { return message.react(ayar.no)

} else { if(!member) return message.channel.send(embed.setDescription(`Taga çekeceğin bir üye belirt.`).setTimestamp().setFooter(ayar.footer))

let data = tdb.fetch(`tagverdi.${member.id}`)

    if(data) return message.channel.send(`Bu kişi daha önceden tag almış.`).then(x => x.delete({timeout: 10000}));
        const filter = (reaction, user) => { return ["✅"].includes(reaction.emoji.name) && user.id === member.id }
        message.channel.send(embed.setDescription(`${member}, ${message.author} yetkilisi seni taga çekmek istiyor. Kabul ediyor musun?`).setTimestamp().setFooter(ayar.footer)).then(x => {
 x.react("✅")
            x.awaitReactions(filter, { max: 1, time: 15000, error: ['time']}).then(mavera => { let maveracik = mavera.first()
                if (maveracik) { db.add(`tsayi.${message.author.id}.toplam`, 1) && db.add(`puan.${message.author.id}.tagaldir`, 10)
    
            message.channel.send(embed.setDescription(`${message.author}, ${member} kullanıcısına başarıyla tag aldırttınız.`).setTimestamp().setFooter(ayar.footer)).then(x => x.delete({timeout: 10000}))}})})}}

exports.conf = {enabled: true, guildOnly: false, aliases: ['tagaldır', 'tag-aldır', 'ta'], permLevel: 0}
exports.help = {name: "tagaldır"}