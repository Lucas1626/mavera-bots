const { MessageEmbed, Discord } = require('discord.js')
const ayar = require('../ayarlar.json')

exports.run = async (client, message, member) => {
   if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)

        message.channel.send(new MessageEmbed()
        .setDescription(`Selam dostum, aşağıda vereceğim komutlarla tüm panelleri ayarlayabilirsin.

        **➥ Kullanıcıya puan eklemek için** \`.puan-ekle <puan>\` [ Yakında ]
        **➥ Kullanıcıdan puan silmek için** \`.puan-sil <puan>\` [ Yakında ]
        **➥ Kullanıcıya yetki vermek/almak için** \`.yetki @Mavera/ID\`
        **➥ Bir kullanıcıya özel rol vermek için** \`.perm @Mavera/ID <tür>\`

Çok yakında daha fazla komutlarla panel ayarlamasında karşınızda olacağız !

`).setFooter(ayar.footer).setTimestamp().setColor('BLACK'))}

exports.conf = {enabled: true, guildOnly: false, aliases: ['ss2', 'system2', 's2'], permLevel: 0}
exports.help = {name: "panel"}