const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

var hoje = new Date();
            var dd = hoje.getDate();
            var mm = hoje.getMonth()+1;
            var hh = hoje.getHours()-3;
            var min = hoje.getMinutes();
            var ss = hoje.getSeconds();
            var yyyy = hoje.getFullYear();
            if(dd<10){
                dd = '0'+dd;
            }
            if (mm<10) {
                mm = '0'+mm;
            }
            if (hh<10){
		if(hh<01){
		    hh = 3+hh;
		}
                hh = '0'+hh;
            }
            if (min<10){
                min = '0'+min;
            }
            var hoje = dd+ '/' +mm+ '/' +yyyy + ' às ' + hh + ':' + min;
	    var hojee = dd+ '/' +mm+ '/' +yyyy;

var prefix = "+";

;

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});

client.on('guildMemberAdd', member => {
  let avatar = member.user.avatarURL
  let role = member.guild.roles.find('name', 'Membro');
  let embed = new Discord.RichEmbed()
      .setColor("FFFFF")
      .setThumbnail(avatar)
      .addField('Bem vindo ao discord.', `Bem vindo(a) ${member} ao discord oficial do Sponge!\n Você foi o __${member.guild.memberCount}__ player a entrar em nosso servidor\n \nPara interagir com os player vá em: #bate-papo\nPara ver os nossos anúncios vá em: #avisos\n \nAcesse já o servidor: jogar.sponge-network.tk`)
      .setFooter(`Sponge Network - 2018`);
      client.channels.get('483379676690251778').send(embed);
})

client.on('message', message =>{
  if(message.content.includes("https://discord.gg/")){
      message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})
client.on('message', message =>{
  if(message.content.includes("https://discord.me/")){
      message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})




client.login(process.env.SpongeToken);
