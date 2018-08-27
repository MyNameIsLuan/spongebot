const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    message.delete().catch(O_o=>{});
    const msg1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`**${message.author.username}** selecione alguma categoria para ver os comandos.
🎥 **»** Relacionados ao YouTube
🔨 **»** Relacionados à Equipe
💸 **»** Relacionados ao VIP
🎲 **»** Geral`)
    message.member.send(msg1).then(msg=> {
        msg.react("🔨").then(r => {
            msg.react("🎥")
            msg.react("💸")
            msg.react("🎲")

            const equipe = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
            const yt = (reaction, user) => reaction.emoji.name === '🎥' && user.id === message.author.id;
            const vip = (reaction, user) => reaction.emoji.name === '💸' && user.id === message.author.id;
            const geral = (reaction, user) => reaction.emoji.name === "🎲" && user.id === message.author.id;

            const eqp = msg.createReactionCollector(equipe, { time: 60000 });
            const ytb = msg.createReactionCollector(yt, { time: 60000 });
            const vp = msg.createReactionCollector(vip, { time: 60000 });
            const grl = msg.createReactionCollector(geral, { time: 60000});

            eqp.on('collect', r=> {
                const embed = new Discord.RichEmbed()
                .setAuthor("🔨 Equipe")
                .setDescription(`*Algumas informações*
\n**P:** Onde faço o formulário?
**R:** [Clique aqui](https://goo.gl/forms/yAOsIQ3jkJaOIhFe2) e preencha o formulário de __Ajudante__.

**P:** Onde/Quando recebo a resposta?
**R:** Se for aceito, será respondido em menos de 72 horas por mensagem privada no Discord.`)
                message.member.send({embed: embed}).then(a=>a.delete(15000));
            ytb.on('collect', r=>{
                    const ytb = new Discord.RichEmbed()
                    .setAuthor("🎥 YouTube")
                    .setDescription(`*Algumas informações*
    \n**P:** Quais são os requisitos para a tag **YT**?\n
    **R:**__Mini YT__:
    Frequência de vídeos: De 1 á 2 vídeos por semana (frequência de vídeos no servidor, aumentará chances de promover a TAG)
    Mínimo de views: 100 views
    Mínimo de inscritos: 300 inscritos
    Tempo de ausência: Se passar mais de 2 semanas sem gravar 1 vídeo no server, terá sua tag retirada!\n
    __Youtuber__
    Frequência de vídeos: De 1 á 2 vídeos por semana (frequência de vídeos no servidor, aumentará chances de promover sua TAG)
    Mínimo de views: 250 de views
    Mínimo de inscritos: 600 inscritos
    Tempo de ausência: Se passar mais de 2 semanas sem gravar 1 vídeo no server, terá sua tag retirada!\n
    Para soliciar tua tag, contate o <@368111860735541248>!`)
                    message.author.send({ embed: ytb }).then(a=>a.delete(15000));
                })
                vp.on('collect', r=>{
                    const vp = new Discord.RichEmbed()
                    .setAuthor("💸 VIP")
                    .setDescription(`*Algumas informações*
    \n**P:** Onde posso comprar os VIP's?
    **R:** http://www.spongenetwork.top/.
    **P:** Quais são os preços dos VIP's?
    **R:** Está tudo explicado no nosso site!.`)
                grl.on('collect', r=>{
        const glr = new Discord.RichEmbed()
        .setAuthor("🎲 Geral")
        .setDescription(`*Algumas informações*
    \nUse __+ajuda__ para saber os comandos do servidor.
    Use __+dog__ para ver um gif fofo de cachorro.
    Use __+anunciar__ para realizar um anúncio.
    Use __+pergunta__ para fazer uma pergunta ao bot.
    Use __+avatar [@]__ para ver a foto de um usuário.
    Use __+chat__ para desligar/ligar o chat.
    Use __+svinfo [ip]__ para ver as informações de um servidor (minecraft).
    Use __+legit [@]__ para ver se o player é legit
    Use __+limpar [2 á 100]__ para limpar o chat.
    Use __+piada__ para rir um pouquinho com as piadas mais bostas.
    Use __+sugestão [sugestão]__ para   enviar uma sugestão. **MANUTENÇÃO**
    Use __+vote [msg]__ para iniciar uma votação.`)
        message.author.send({ embed: glr }).then(a=>a.delete(15000));

})
})
})
})
})
}
