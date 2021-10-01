module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Canzone corrente ${queue.current.title} In pausa ✅` : `Qualcosa è andato storto ${message.author}... Riprova! ❌`);
    },
};