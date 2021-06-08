const { MessageEmbed, Discord } = require('discord.js')
const ayar = require('../ayarlar.json')

exports.run = async (client, message, member) => {
   // if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)

        message.channel.send(new MessageEmbed()
        .setDescription(`Selam dostum, gördüğüme göre nasıl puan kasacağını öğrenmek istiyorsun. Bunları şimdi anlatacağım.

        <a:mavera_sag:847040421451399188> **Puan Sistemi Nedir?**
   ➥ Puan sistemi, görev yaptıkça kazandığınız 'coinler'dir. Her kayıt, taglı ve yetkili çektiğinizde ayrı puanlar kazanacaksınız. Böylece puanınız ile yetki atlayabileceksiniz. Bir nevi \`çalış-kazan\` mantığıdır. Şu aktif şu değil diye değil, puanınıza göre hareket edilecektir.

        <a:mavera_sag:847040421451399188> **Puanlarıma Nasıl, Nereden Ulaşacağım?**
   ➥ Puan, yani coinlerinize \`.me\` & \`.stat\` komutlarıyla ulaşabilirsiniz. Burada kaç kayıt yaptığınız gibi tüm bilgilere detaylıca ulaşabilirsiniz.

        <a:mavera_sag:847040421451399188> **Tüm Komutlara Nasıl Ulaşabilirim?**
   ➥ Tüm komutlara \`.help\` & \`.yardım\` yazarak ulaşabilirsiniz.

        <:mavera_sag:847040421451399188> **Peki Görevlerden Kazandığımız Coin Miktarları Ne Kadar?**
   ➥ Bunun için de aşağıdaki tabloyu inceleyebilirsiniz :)

   • Her kayıt: \`5\`
   • Taglı çekme: \`10\`
   • Mesaj/ses aktifliği: \`Yakında. [ Her mesaj/ses 3 ]\`
   • Her davet: \`Yakında. [ 15 ]\`
   • Yetkili çekme: \`20\`
`).setFooter(ayar.footer).setTimestamp().setColor('BLACK'))}

exports.conf = {enabled: true, guildOnly: false, aliases: ['info', 'b', 'statsistem', 'puansistem', 'puan-sistemi', 'ps', 'puans', 'psistem', 'psistemi', 'system', 'sistem', 'ss', 'stat-sistem'], permLevel: 0}
exports.help = {name: "bilgi"}