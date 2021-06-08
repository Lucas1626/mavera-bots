const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const db = require('quick.db')
const ayar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let tag = ayar.tag
let nick = args[1]
let yas = args[2]
if(!member) return message.react(ayar.no)
if(!nick || !yas) return message.react(ayar.no)
if(yas < 13) return message.react(ayar.no) && message.channel.send(new MessageEmbed().setTitle("Kayıt Başarısız !").setDescription(`Kullanıcının Yaşı 13'ten Küçük Olduğu İçin Kaydedemem !`).setColor('RED'))
if(member.id === client.user.id) return message.react(ayar.no)
if (member.hasPermission(8)) return message.react(ayar.no)

data.add(`yetkili.${message.author.id}.kadin`, 1)
data.add(`puan.${message.author.id}.kkayit`, 5)
data.add(`yetkili.${message.author.id}.toplam`, 1)
data.add(`ksayi.${message.author.id}.toplam`, 1)
let kayıtlar = data.fetch(`yetkili.${message.author.id}.toplam`)
let isim = await db.get(`isimler.${member.id}`)
await data.push(`isimler.${member.id}`, {reg: message.author.id, isim: nick, yas: yas, rol: ayar.kadın})

member.setNickname(`${tag} ${nick} | ${yas}`)
message.react(ayar.yes)
member.roles.add(ayar.kadın)
member.roles.add(ayar.kadın2)
member.roles.add(ayar.kadın3)
member.roles.remove(ayar.unregister)
member.roles.remove(ayar.unregister2)
member.roles.remove(ayar.jail)
member.roles.remove(ayar.şüpheli)

message.channel.send(new MessageEmbed()
.setTitle("Kayıt Tamamlandı !")
.setDescription(`${member} kişisi <@&${ayar.kadın}> olarak kaydedildi. <a:mavera_onay:838085541551538218> 

${ayar.sag} Toplamda **${isim.length || 0}** isim kayıtı bulundu.

${isim.length >=0 ? isim.map((value, index) => `\`✫ ${value.Name} | ${value.Age}\` (<@&${value.Rol}>)`).join("\n") : "`Kullanıcı daha önce sunucumuzda kayıt olmamış.`"}`)
.setFooter(`${message.author.tag} toplam ${kayıtlar} kayıta sahip. | Mavera Was Here !`)
.setColor('0x2f3136')
.setTimestamp())

client.channels.cache.get(ayarlar.chat).send(`${member} sunucumuza hoşgeldin, seninle birlikte **${message.guild.memberCount}** kişiye ulaştık !`).then(x => x.delete({timeout: 5000}))}

exports.conf = {enabled: true, guildOnly: true, aliases: ["kadın", "k"]};
exports.help = {name: 'kadın'};
  