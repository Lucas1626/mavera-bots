const { MessageEmbed } = require("discord.js");
const ayar = require("../ayarlar.json");
const data = require("quick.db")
const kdb = new data.table("kullanıcı");
const moment = require("moment");
exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has(ayar.bancı) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let embed = new MessageEmbed().setColor('RED')

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    let reason = args.splice(1).join(" ") || "Belirtilmedi."
    if (!user) return message.channel.send(embed.setDescription(`${message.author} kimi yasaklayacağını yazmadın! \`.ban @Mavera/ID <sebep>\``).setTimestamp().setFooter(ayar.footer)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))

    if (user.id === message.author.id) return message.react(ayar.no)
    if (user.id === client.user.id) return message.react(ayar.no)
    if (user.roles.highest.position >= message.member.roles.highest.position) return message.react(ayar.no)
    if (user.hasPermission(8)) return message.react(ayar.no)

    let atilanAy = moment(Date.now()).format("MM");
    let atilanSaat = moment(Date.now()).format("HH:mm:ss");
    let atilanGün = moment(Date.now()).format("DD");
    let banAtılma = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanSaat}`;
    let cezaID = data.get(`cezaid.${message.guild.id}`) + 1
    message.react(ayar.yes)
    user.ban({ reason: reason })
    message.channel.send(embed.setDescription(`${user} kullanıcı ${message.author} tarafından **${reason}** sebebiyle yasaklandı.`).setTimestamp().setFooter(ayar.footer)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))

    data.add(`cezaid.${message.guild.id}`, +1)
    data.add(`ceza.${message.author.id}.ban`, 1)
    kdb.add(`cezapuan.${user.id}`, 20)
    kdb.push(`sicil.${user.id}`, { userID: user.id, adminID: message.author.id, Tip: "Ban", start: banAtılma, cezaID: cezaID })
    
    client.channels.cache.get(ayar.banLog).send(embed.setDescription(`
    ${user} Adlı kullanıcı yasaklandı.

    \`•\` Ceza ID: \`#${cezaID}\`
    \`•\` Yasaklanan Kullanıcı: ${user} (\`${user.id}\`)
    \`•\` Yasaklayan Yetkili: ${message.author} (\`${message.author.id}\`)
    \`•\` Yasaklanma Sebebi: \`${reason}\`
    \`•\` Yasaklanma Tarihi: \`${banAtılma}\`
    `).setFooter(ayar.footer).setTimestamp())}

    exports.conf = {enabled: true, guildOnly: true, aliases: [], permLevel: 0}
    exports.help = {name: 'ban'}