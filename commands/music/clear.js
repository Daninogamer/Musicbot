module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! โ`);

        if (!queue.tracks[0]) return message.channel.send(`Nessuna musica in coda dopo quella attuale ${message.author}... Riprova! โ`);

        await queue.clear();

        message.channel.send(`la coda รจ stata cancellata ๐๏ธ`);
    },
};