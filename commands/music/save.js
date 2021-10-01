module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        message.author.send(`Hai salvato la canzone ${queue.current.title} | ${queue.current.author} dal server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Ho inviato il titolo della canzone in privato ✅`);
        }).catch(error => {
            message.channel.send(`Non posso inviarti messaggi in privato ${message.author}... Riprova! ❌`);
        });
    },
};