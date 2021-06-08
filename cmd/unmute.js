const { MessageEmbed } = require("discord.js");
const ayar = require("../ayarlar.json");
const db = require("quick.db")
const kdb = new db.table("kullanıcı");

exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has(ayar.muteci) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let embed = new MessageEmbed().setColor('RANDOM')

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    if (!user) return message.channel.send(embed.setDescription(`${message.author} kimin mutesini kaldıracağını yazmadın! \`.unmute @Mavera/ID\``).setTimestamp().setFooter(ayar.footer)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))

    if (user.id === message.author.id) return message.react(ayar.no)
    if (user.id === client.user.id) return message.react(ayar.no)
    if (user.hasPermission(8)) return message.react(ayar.no)

    let data = await kdb.get(`durum.${user.id}.mute`)
    if (!data) return message.channel.send(embed.setDescription(`Kullanıcı zaten muteli değil.`).setFooter(ayar.footer)).then(m > m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))
    if (data) {
        user.roles.remove(ayar.muteRol).catch()
        message.react(ayar.yes)
        client.channels.cache.get(ayar.muteLog).send(embed.setDescription(`${user} kullanıcısının **chat-mute** cezası ${message.author} tarafından kaldırıldı.`).setTimestamp().setFooter(ayar.footer))
        kdb.delete(`durum.${user.id}.mute`)}}

exports.conf = {enabled: true, guildOnly: true, aliases: [], permLevel: 0}
exports.help = {name: 'unmute'}