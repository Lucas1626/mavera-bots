const { MessageEmbed } = require("discord.js");
const ayar = require("../ayarlar.json");
const db = require("quick.db")
const kdb = new db.table("kullanıcı");

exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has(ayar.banHammer) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let embed = new MessageEmbed().setColor('RANDOM')

    let user = await client.users.fetch(args[0]);
    if (!args[0]) return message.react(ayar.no)
    let sebep = args.splice(1).join(" ") || "Belirtilmedi."

    if (user.id === message.author.id) return message.react(ayar.no)
    if (user.id === client.user.id) return message.react(ayar.no)
    if (user.roles.highest.position >= message.member.roles.highest.position) return message.react(ayar.no)
    if (user.hasPermission(8)) return message.react(ayar.no)

    let atilanAy = moment(Date.now()).format("MM");
    let atilanSaat = moment(Date.now()).format("HH:mm:ss");
    let atilanGün = moment(Date.now()).format("DD");
    let force = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanSaat}`;
    let cezaID = db.get(`cezaid.${message.guild.id}`) + 1
    kdb.push(`sicil.${user.id}`, { userID: user.id, adminID: message.author.id, Tip: "Force-Ban", start: force, cezaID: cezaID })
    message.react(ayar.yes)

    message.guild.members.ban(user.id, { reason: sebep })
    message.channel.send(embed.setDescription(`<@!${user.id}> (\`${user.tag}\`) kullanıcısı **${sebep}** sebebiyle yasaklandı.`).setTimestamp().setFooter(ayar.footer)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))
 
    client.channels.cache.get(ayar.banLog).send(embed.setDescription(`

\`•\` Ceza ID: \`#${cezaID}\`
\`•\` Yasaklanan Kullanıcı: ${user} (\`${user.id}\`)
\`•\` Yasaklayan Yetkili: ${message.author} (\`${message.author.id}\`)
\`•\` Yasaklanma Sebebi: \`${sebep}\`
\`•\` Yasaklanma Tarihi: \`${force}\`
 `).setFooter(ayar.footer).setTimestamp())}

 exports.conf = {enabled: true, guildOnly: true, aliases: ['forceban', 'force-ban', 'idban', 'ıdban'], permLevel: 0}
 exports.help = {name: 'force'}