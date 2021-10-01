module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Canzone corrente **${queue.current.title}** skipped ✅` : `Qualcosa è andato storto ${message.author}...  Riprova! ❌`);
    },
};