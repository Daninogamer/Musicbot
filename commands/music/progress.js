module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Riproduzione di un live, nessun dato da visualizzare 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};