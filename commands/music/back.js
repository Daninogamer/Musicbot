module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Nessuna musica in coda dopo quella attuale ${message.author}... Riprova! ❌`);

        await queue.back();

        message.channel.send(`Riproducendo **previous** canzone ✅`);
    },
};