const { MessageEmbed, Discord, Invite } = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
const conf = require("../ayarlar.json");
const messageUserChannel = require("../schemas/messageUserChannel");
const voiceUserChannel = require("../schemas/voiceUserChannel");
const messageUser = require("../schemas/messageUser");
const voiceUser = require("../schemas/voiceUser");
const voiceUserParent = require("../schemas/voiceUserParent");
const db = require('quick.db')
const ayar = require('../ayarlar.json')


exports.run = async (client, message, member) => {
   // if(!message.member.roles.cache.get(ayar.yetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.react(ayar.no)

   let erkek = db.fetch(`puan.${message.author.id}.ekayit`)
   let kadin = db.fetch(`puan.${message.author.id}.kkayit`)
   let tagli = db.fetch(`puan.${message.author.id}.tagaldir`)
   let yetkili = db.fetch(`puan.${message.author.id}.ycek`)
   let esayi = db.fetch(`esayi.${message.author.id}.toplam`)
   let ksayi = db.fetch(`ksayi.${message.author.id}.toplam`)
   let tsayi = db.fetch(`tsayi.${message.author.id}.toplam`)
   let ysayi = db.fetch(`ysayi.${message.author.id}.toplam`)
   let bansayi = db.fetch(`ceza.${message.author.id}.ban`)
   let mutesayi = db.fetch(`ceza.${message.author.id}.mute`)
   let vmutesayi = db.fetch(`ceza.${message.author.id}.vmute`)
   let jailsayi = db.fetch(`ceza.${message.author.id}.jail`)
   let isayi = db.fetch(`invite.${message.author.id}.toplam`)
   let coin = erkek + kadin + tagli

   const category = async (parentsArray) => {
    const data = await voiceUserParent.find({ guildID: message.guild.id, userID: message.author.id });
    const voiceUserParentData = data.filter((x) => parentsArray.includes(x.parentID));
    let voiceStat = 0;
    for (var i = 0; i <= voiceUserParentData.length; i++) {
      voiceStat += voiceUserParentData[i] ? voiceUserParentData[i].parentData : 0;
    }
    return moment.duration(voiceStat).format("H [saat], m [dakika]");
  };
  
  const Active1 = await messageUserChannel.find({ guildID: message.guild.id, userID: message.author.id }).sort({ channelData: -1 });
  const Active2 = await voiceUserChannel.find({ guildID: message.guild.id, userID: message.author.id }).sort({ channelData: -1 });
  const voiceLength = Active2 ? Active2.length : 0;
  let voiceTop;
  let messageTop;
  Active1.length > 0 ? messageTop = Active1.splice(0, 5).map(x => `<#${x.channelID}>: \`${Number(x.channelData).toLocaleString()} mesaj\``).join("\n") : messageTop = "Veri bulunmuyor."
  Active2.length > 0 ? voiceTop = Active2.splice(0, 5).map(x => `<#${x.channelID}>: \`${moment.duration(x.channelData).format("H [saat], m [dakika]")}\``).join("\n") : voiceTop = "Veri bulunmuyor."
  
  const messageData = await messageUser.findOne({ guildID: message.guild.id, userID: message.author.id });
  const voiceData = await voiceUser.findOne({ guildID: message.guild.id, userID: message.author.id });

  const messageDaily = messageData ? messageData.dailyStat : 0;
  const messageWeekly = messageData ? messageData.weeklyStat : 0;

  const voiceDaily = moment.duration(voiceData ? voiceData.dailyStat : 0).format("H [saat], m [dakika]");
  const voiceWeekly = moment.duration(voiceData ? voiceData.weeklyStat : 0).format("H [saat], m [dakika]");

  const filteredParents = message.guild.channels.cache.filter((x) =>
    x.type === "category" &&
    !conf.public.includes(x.id) &&
    !conf.register.includes(x.id) &&
    !conf.music.includes(x.id) &&
    !conf.priv.includes(x.id) &&
    !conf.alone.includes(x.id) &&
    !conf.oyun.includes(x.id)
  );

        message.channel.send(new MessageEmbed()
        .setDescription(`${message.author} ***Yetkilisinin Ki??isel Bilgileri***
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Kay??t Bilgileri**
        ??? Toplam erkek kay??t say??s??: \`${esayi}\`
        ??? Toplam bayan kay??t say??s??: \`${ksayi}\`
        ??? Taga ??ekti??i ki??i say??s??: \`${tsayi}\`
        ??? Yetkili yapt?????? ki??i say??s??: \`${ysayi}\`
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Puan Bilgileri:**
        ??? Erkek kay??t puan??: \`${erkek}\`
        ??? Bayan kay??t puan??: \`${kadin}\`
        ??? Tagl?? ??ekme puan??: \`${tagli}\`
        ??? Yetkili ??ekme puan??: \`${yetkili}\`
        ??? Davet etme puan??: \`${isayi}\`
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Kulland?????? Ceza Komut Bilgileri:**
        ??? Toplam \`${bansayi}\` kere ban komutunu kullanm????.
        ??? Toplam \`${jailsayi}\` kere jail komutunu kullanm????.
        ??? Toplam \`${mutesayi}\` kere chat-mute komutunu kullanm????.
        ??? Toplam \`${vmutesayi}\` kere voice-mute komutunu kullanm????.
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Genel Bilgileri:**
        ??? Mesaj say??s??: \`${messageData ? messageData.topStat : 0}\`
        ??? Seste durma s??resi: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika]")}\`
        ??? Davet etti??i ki??i say??s??: \`Yak??nda.\`
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Ses Bilgileri:**
        ??? Toplam: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika]")}\`
        ??? Public Odalar: \`${await category(conf.public)}\`
        ??? Kay??t Odalar??:  \`${await category(conf.register)}\`
        ??? Private Odalar:  \`${await category(conf.priv)}\`
        ??? Alone Odalar:  \`${await category(conf.alone)}\`
        ??? Oyun Odalar??:  \`${await category(conf.oyun)}\`
        ??? M??zik Odalar: \`${await category(conf.music)}\`
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Sesli Kanal Bilgileri: (\`Toplam ${voiceLength} kanal\`)**
        ${voiceTop}
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Mesaj Bilgileri: (\`Toplam ${messageData ? messageData.topStat : 0} mesaj\`)**
        ${messageTop}
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **G??nl??k & Haftal??k Mesaj/Ses Bilgileri**
        ??? **G??nl??k Veriler**
        ??? Mesaj : ${messageDaily}
        ??? Ses : ${voiceDaily}

        ??? **Haftal??k Veriler**
        ??? Mesaj : ${messageWeekly}
        ??? Ses : ${voiceWeekly}
        **?????????????????????????????????????????????**
    ${ayar.yildiz} **Coin Bilgileri:**
        ??? Toplam \`${coin}\` coinin bulunuyor.
        ??? Coinin ne i??e yarad??????n?? ????renmek i??in \`.system\` yazabilirsin.
        ??? Marketten bir ??eyler almak istersen \`.market\` yazabilirsin.
`).setFooter(ayar.footer).setTimestamp().setColor('0x2f3136'))}

exports.conf = {enabled: true, guildOnly: false, aliases: ['me', 'my'], permLevel: 0}
exports.help = {name: "stat"}