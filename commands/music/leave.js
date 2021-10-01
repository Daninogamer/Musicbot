module.exports = {
    name: 'leave',
    aliases: ['dc'],
    utilisation: '{prefix}leave',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        queue.destroy();

        message.channel.send(`Disconnesso con successo 👋`);
    },
};