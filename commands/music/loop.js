const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Devi prima disabilitare la musica corrente in modalità loop (${client.config.app.px}loop) ${message.author}... Riprova! ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** l'intera coda si ripeterà all'infinito 🔁` : `Qualcosa è andato storto ${message.author}... Riprova! ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Devi prima disabilitare la musica corrente in modalità loop (${client.config.app.px}loop queue) ${message.author}... Riprova! ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** la musica corrente verrà ripetuta all'infinito (puoi ripetere la coda con l'opzione <queue>) 🔂` : `Qualcosa è andato storto ${message.author}... riprova ? ❌`);
        };
    },
};