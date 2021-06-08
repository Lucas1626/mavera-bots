const { MessageEmbed, Discord } = require('discord.js')
const ayar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
   if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)

        message.channel.send(new MessageEmbed()
        .setDescription(`Hey ${message.author}, sunucumuzun özel marketine hoşgeldin! Buradan istediğin bir şeyi satın alabilirsin.

        ${ayar.yildiz} **Market Sistemi Nedir?**
    ➥ Market sistemi ile markette olan bir şeyi kendi coininiz ile satın alabilirsiniz. Şuanlık sistem yeni geliştirildiği için işlemler manuel olacaktır, anlayışınız için teşekkürler.

        \`\`\`diff
- 💸 250 Coin = 3x Discord Game
- 💸 500 Coin = Deezer Premium
- 💸 750 Coin = Spotify Premium
- 💸 1.000 Coin = Netflix Aile Paketi
- 💸 1.500 Coin = 1 Aylık Classic Nitro
- 💸 2.000 Coin = 1 Aylık Boost Nitro \`\`\`

• Ne kadar paran olduğunu öğrenmek için \`.coin\` yazabilirsiniz.
`).setFooter(ayar.footer).setTimestamp().setColor('BLACK'))}

exports.conf = {enabled: true, guildOnly: false, aliases: ['shop'], permLevel: 0}
exports.help = {name: "market"}