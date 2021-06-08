const { MessageEmbed, } = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
    let yasaklar = ["aq", "allah", "Allah", "discord.gg", ".gg", "discord.gg/", "https://", "amk", "sik", "yarak", "yarrak", "oç", "oc", "orospu"]
    let sebep = args.join(' ');
    if (sebep && yasaklar.includes(sebep)) return message.reply('yasaklı kelimelerle AFK olamazsın.').then(x => x.delete({ timeout: 5000 }) && message.delete());
    if (sebep) db.set(`${message.author.id}.afk.sebep`, sebep);
    db.set(`${message.author.id}.afk.sure`, new Date());
    if (message.member.manageable) message.member.setNickname(`[AFK] ${message.member.displayName}`).catch(console.log);
    message.reply(`tekrar klavyene dönmen dileğiyle...`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }))}

    exports.conf = {enabled: true, guildOnly: true, aliases: [], permLevel: 0}
    exports.help = {name: 'afk'}