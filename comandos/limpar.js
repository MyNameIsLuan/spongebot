const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");

   const num = args.join(" ");

   if(isNaN(num) == true) return message.reply("por favor, digite somente números, de 2 a 100. :x:").then(msg => msg.delete(10000));
   if(num < 2) return message.reply("por favor, digite o número maior que 2 para deletar as mensagens. :x:").then(msg => msg.delete(8000));
   if(num > 100) return message.reply("por favor, digite o número maior que 2 e menos que 100. :x:").then(msg => msg.delete(8000));
   message.channel.bulkDelete(args[0]).catch(error => message.reply(`algumas mensagens não puderam ser deletadas.`));
   
   message.channel.send(`O chat foi limpo! Limpado __${args[0]}__ mensagens por __${message.author}.__`).then(msg => msg.delete(5000));
   
}