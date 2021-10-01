module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nessuna canzone in riproduzione ${message.author}... Riprova! ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Si prega di specificare un filtro valido per abilitare o disabilitare ${message.author}... Riprova! ❌\n${actualFilter ? `Filtro corrente ${actualFilter} (${client.config.app.px}filtro ${actualFilter} per disabilitarlo).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Questo filtro non esiste! ${message.author}... Riprova! ❌\n${actualFilter ? `Filtro correnre ${actualFilter}.\n` : ''}Lista dei vari filtri disponibili ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Il filtro ${filter} è ora **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Ricorda che più lunga è la canzone, più tempo ci vorrà.*`);
    },
};