const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

    const comousar = new Discord.RichEmbed()
    .setAuthor("Sponge", client.user.avatarURL)
    .setDescription(`Ao executar, ira mandar uma sugestão aos staffers.`)
    .setColor("#4a2aed")
    .setFooter("Sponge")
    .addField("Como usar:", "`+sugestao <msg>`")
 


    let suges = args.join(' ');
    if(!suges) return message.channel.send(message.author, comousar).then(msg => msg.delete(7000));

    message.delete().catch(O_o=>{});
    const sugeseviado = new Discord.RichEmbed()
        .setTitle("Nova sugestão!","https://cdn.discordapp.com/attachments/444946317018529804/466307134393548810/Chest.gif")
        .setThumbnail(message.author.avatarURL)
        .addField("Quem mandou a sugestão:", message.author)
        .addField("Sugestão:", suges)
        .setTimestamp()
        .setFooter("Sponge - Sugestões")


    if(message.guild.channels.find("name", "sugestões")){
        let canal = message.guild.channels.find("name", "sugestões")
        canal.send(sugeseviado).then(msg=> {
            msg.react("✅").then(r => {
            msg.react("❌")
            })})
        message.channel.send(`:white_check_mark: **|** ${message.author}, sua sugestão foi enviada com sucesso!`).then(msg => msg.delete(10000));
        }

}

exports.help = {
    name: "sugestoes",
    aliases: [
        'sugest',
        'sugestoes'
    ]
}