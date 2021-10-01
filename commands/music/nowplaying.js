const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Volume **${queue.volume}**%\nDuration **${trackDuration}**\nLoop mode **${methods[queue.repeatMode]}**\nRequested by ${track.requestedBy}`);

        message.channel.send({ embeds: [embed] });
    },
};