const { MessageEmbed } = require("discord.js")
const ayar = require("../ayarlar.json")
const db = require("quick.db")
const kdb = new db.table("kullanıcı")

exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has(ayar.bancı) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let embed = new MessageEmbed().setColor('RANDOM')

    let user = await client.users.fetch(args[0]);
    if (!args[0]) return message.channel.send(embed.setDescription(`${message.author} kimin yasağını kaldıracağını yazmadın! \`.unban @Mavera/ID\` `).setTimestamp().setFooter(ayar.footer))

    message.guild.members.unban(user.id)
    message.react(ayar.yes)
    message.channel.send(embed.setDescription(`<@!${user.id}> (\`${user.tag}\`) kullanıcısının yasağı ${message.author} tarafından kaldırıldı.`).setTimestamp().setFooter(ayar.footer)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))
    client.channels.cache.get(ayar.banLog).send(embed.setDescription(`

\`•\` Yasağı Kaldırılan: <@!${user.id}> (\`${user.tag}\` - \`${user.id}\`)
\`•\` Yasağı Kaldıran: ${message.author}
`).setTimestamp().setFooter(ayar.footer))}

exports.conf = {enabled: true, guildOnly: true, aliases: [], permLevel: 0}
exports.help = {name: 'unban'}