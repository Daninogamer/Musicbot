player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`🎶 Riproduco **${track.title}** in **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Canzone **${track.title}** Aggiunta alla coda ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Sono stato disconnesso manualmente dal canale, cancellando la coda... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Non c\'è nessuno nel canale vocale, mi disconnetto dal canale vocale... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Ho finito di riprodurre tutte le canzoni della coda ✅');
});