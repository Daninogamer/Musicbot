module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! โ`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Canzone corrente ${queue.current.title} ripresa โ` : `Qualcosa รจ andato storto ${message.author}... Riprova! โ`);
    },
};