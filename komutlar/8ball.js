const Discord = require('discord.js');

const cevaplar = [
    "Kesin yani",
	"Crash [Xcopt Tuna Bot] is shutdowning!",
    "hayır",
    "belki",
    "olabilir",
    "Beyin GG Oldu o ne biçim soru len",
    "imkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt.**&8ball <soru>**')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: '8ball işte',
  usage: '8ball <soru>'
};