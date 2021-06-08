const { MessageEmbed, Discord, Invite, Message, User } = require('discord.js')
const ayar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

        message.channel.send(new MessageEmbed()
        .setDescription(`${ayar.kitap} **Kayıt Komutları:**
        ➥ \`${ayar.prefix}e @Mavera/ID İsim Yaş\` => Kullanıcıyı **ERKEK** olarak kaydedersiniz.
        ➥ \`${ayar.prefix}k @Mavera/ID İsim Yaş\` => Kullanıcıyı **KADIN** olarak kaydedersiniz.
        ➥ \`${ayar.prefix}isim @Mavera/ID İsim Yaş\` => Kullanıcının **İSİM/YAŞINI** değiştirirsiniz.
        ➥ \`${ayar.prefix}kayıtsız @Mavera/ID\` => Kullanıcıyı **KAYITSIZA** atarsınız.
        ➥ \`${ayar.prefix}topteyit\` => En fazla kayıt yapan 15 kişinin kayıtlarına bakarsınız.
        ➥ \`${ayar.prefix}teyitlerim\` => Kendi kayıt sayınıza bakarsınız [ Yakında. ]
        ➥ \`${ayar.prefix}taglı\` => Etiketlediğiniz kullanıcıya tag aldırırsınız. 
`).setColor('0x2f3136'))

message.channel.send(new MessageEmbed()
.setDescription(`${ayar.dikkat} **Moderasyon Komutları:**
        ➥ \`${ayar.prefix}ban @Mavera/ID\` => Kullanıcıyı banlarsınız.
        ➥ \`${ayar.prefix}mute @Mavera/ID\` => Kullanıcıya **CHAT-MUTE** cezası verirsiniz.
        ➥ \`${ayar.prefix}jail @Mavera/ID\` => Kullanıcıyı **KARANTİNAYA** atarsınız.
        ➥ \`${ayar.prefix}vmute @Mavera/ID\` => Kullanıcıya **VOİCE-MUTE** cezası verirsiniz.
        ➥ \`${ayar.prefix}ysay\` => Aktif olup seste olmayan yetkilileri etiketlersiniz.
        ➥ \`${ayar.prefix}ownsay\` => Aktif olup seste olmayan kurucuları etiketlersiniz.
        ➥ \`${ayar.prefix}force @Mavera/ID\` => Force-ban atarsınız.
        ➥ \`${ayar.prefix}çek @Mavera/ID\` => Kullanıcıyı yanınıza çekersiniz.
        ➥ \`${ayar.prefix}git @Mavera/ID\` => Kullanıcının yanına gidersiniz.
        ➥ \`${ayar.prefix}invite @Mavera/ID\` => Kullanıcının davet sayısına bakarsınız.
        ➥ \`${ayar.prefix}invite-ekle @Mavera/ID\` => Kullanıcıya davet eklersiniz.
        ➥ \`${ayar.prefix}invite-sil @Mavera/ID\` => Kullanıcının davetini silersiniz.
        ➥ \`${ayar.prefix}data-sil @Mavera/ID\` => Kullanıcının sicilini **SIFIRLARSINIZ**
        ➥ \`${ayar.prefix}data @Mavera/ID\` => Kullanıcının siciline bakarsınız.
        ➥ \`${ayar.prefix}perm @Mavera/ID <rol>\` => Kişiye özel bir rol verirsiniz. 
        ➥ \`${ayar.prefix}lock\` => Kanala yazmayı kapatırsınız.
        ➥ \`${ayar.prefix}say\` => Sunucunun **ANLIK DURUMUNA** ulaşırsınız.
        ➥ \`${ayar.prefix}ses-bilgi @Mavera/ID\` => Kullanıcının sesteki bilgisine bakarsınız. 
        ➥ \`${ayar.prefix}sil <sayı>\` => Mesaj silersiniz.
        ➥ \`${ayar.prefix}unban @Mavera/ID\` => Yasak kaldırırsınız.
        ➥ \`${ayar.prefix}unmute @Mavera/ID\` => Bir kullanıcının **CHAT-MUTE** cezasını kaldırırsınız.
        ➥ \`${ayar.prefix}unvmute @Mavera/ID\` => Bir kullanıcının **VOİCE-MUTE** cezasını kaldırırsınız.
        ➥ \`${ayar.prefix}unjail @Mavera/ID\` => Bir kullanıcının **KARANTİNA** cezasını kaldırırsınız.
        ➥ \`${ayar.prefix}afk\` => AFK moduna geçersiniz.
        ➥ \`${ayar.prefix}içek\` => **İZİNLİ** olarak birini yanınıza çekersiniz.
        ➥ \`${ayar.prefix}igit\` => **İZİNLİ** olarak birinin yanına gidersiniz.
`).setColor('0x2f3136'))

message.channel.send(new MessageEmbed()
.setDescription(`${ayar.coin} **Stat Komutları:**
➥ \`${ayar.prefix}me\` => Kendi stat bilgilerinize bakarsınız.
➥ \`${ayar.prefix}user @Mavera/ID\` => Kullanıcının bilgilerine bakarsınız.
➥ \`${ayar.prefix}coin\` => Coininize bakarsınız.
➥ \`${ayar.prefix}puan-ekle/sil @Mavera/ID\` => Kullanıcıya puan ekler/silersiniz.
➥ \`${ayar.prefix}sistem @Mavera/ID\` => Stat sistemini öğrenirsiniz.
➥ \`${ayar.prefix}panel\` => Panele erişirsiniz.
➥ \`${ayar.prefix}market\` => Stat markete bakarsınız.
`).setTimestamp().setColor('0x2f3136').setFooter(ayar.footer))}

exports.conf = {enabled: true, guildOnly: false, aliases: ['yardım', 'h', 'y'], permLevel: 0}
exports.help = {name: "help"}