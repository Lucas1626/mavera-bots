const { MessageEmbed } = require("discord.js")
const ayar = require("../ayarlar.json")

exports.run = async(client, message, args) => {

    let embed = new MessageEmbed().setColor('RANDOM')

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
    let permObjesi = {}
    let everPermleri = message.channel.permissionOverwrites.get(everyone.id)
    everPermleri.allow.toArray().forEach(p => { permObjesi[p] = true })

    everPermleri.deny.toArray().forEach(p => { permObjesi[p] = false })
    if (message.channel.permissionsFor(everyone).has('SEND_MESSAGES')) { permObjesi["SEND_MESSAGES"] = false; 
    message.channel.createOverwrite(everyone, permObjesi);
        message.react(ayar.yes)} else {
        permObjesi["SEND_MESSAGES"] = true;
        message.channel.createOverwrite(everyone, permObjesi)
        message.react(ayar.yes)}}

exports.conf = { name: "kilit", aliases: ['lock'], permLevel: 0 }

exports.conf = {enabled: true, guildOnly: true, aliases: ['lock'], permLevel: 0}
exports.help = {name: 'kilit'}