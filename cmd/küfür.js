const Discord = require('discord.js')
const ayar = require('../ayarlar.json')
const data = require("quick.db")

exports.run = async (client, message, args) => {
  if (!message.guild) return
  let db = new data.table("sunucuayar");
  let db2 = new data.table("prefix");
  let guvenliKisiDB = new data.table("guvenlikisi");
  
  let gkv = await guvenliKisiDB.get(`guvenlikisi`) || []
  if (gkv.some(i => i == message.author.id) || message.author.id === message.guild.ownerID) {
    const sec = args[0]
    const prefix = await db2.get("prefix.") || client.ayar.prefix
    if (!sec) {
      return message.channel.send(new Discord.MessageEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setDescription(`küfür korumayı anlatmaya gerek yok bilen bilir qwe`)
      .setFooter(ayar.footer))}

    if (sec == "aç") {
      if (await db.get(`sunucuayar.kufur_koruma`)) {
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Huğ açam mı kapatam mı ask`).setFooter(ayar.footer).setTimestamp())      }
      await db.set(`sunucuayar.kufur_koruma`, "Aktif")
      return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Askim küfür engeli açtım. artık özele mi geçseks?`).setTimestamp().setFooter(ayar.footer))
    }
    if (sec == "kapat") {
      if (!await db.get(`sunucuayar.kufur_koruma`)) { return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`askim kafana sıçarım kapalı zaten xd`).setFooter(ayar.footer))}
      await db.delete(`sunucuayar.kufur_koruma`)
      return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Küfür engeli kapadım kurucu abi`).setTimestamp().setFooter(ayar.footer))
    }} else { return message.reply(`bu komutu sadece taç sahibi kullanabilir.`)}}

    exports.conf = {enabled: true, guildOnly: true, aliases: [], permLevel: 0}
    exports.help = {name: 'küfür'}