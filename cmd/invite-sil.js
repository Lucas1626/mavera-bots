const Discord = require("discord.js")
const ayar = require('../ayarlar.json')
const qdb = require("quick.db");
let inviteDB = new qdb.table("invitemanager")

// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)

    var victim = message.mentions.members.size > 0 ? message.mentions.members.first().id : args.length > 0 ? args[0] : undefined;
    if(!victim) return message.reply("bir kullanıcı etiketle.")
    victim = message.guild.member(victim);
    if(!victim) return message.reply("bir kullanıcı etiketle.");

    var num = Number(args[1]);
    if(isNaN(num)) return message.reply("bu bir rakam değil.");

    var bonus = (await inviteDB.delete(`invites.${victim.id}.bonus`, num) || 0), total = (await inviteDB.get(`invites.${victim.id}.total`) || 0);
    message.reply(`${victim} üyesinden **${num}** davet silindi.`);

    global.onUpdateInvite(victim, message.guild.id, total + bonus)}

exports.conf = {enabled: true, guildOnly: true, aliases: ['invite-sil', 'isil'], permLevel: 0}
exports.help = {name: 'invitesil'}