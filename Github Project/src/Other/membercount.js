const { MessageEmbed } = require('discord.js');
const QuickChart = require('quickchart-js');

module.exports = {
    name: 'mc',
    description: 'none',
    run: async (client, message, args) => {
        const guild = message.guild;
        const totalMembers = guild.memberCount;
        const botMembers = guild.members.cache.filter(member => member.user.bot).size;
        const humanMembers = totalMembers - botMembers;
        const last24Hours = guild.members.cache.filter(member => Date.now() - member.joinedTimestamp < 24 * 60 * 60 * 1000).size;
        const last7Days = guild.members.cache.filter(member => Date.now() - member.joinedTimestamp < 7 * 24 * 60 * 60 * 1000).size;

        const chart = new QuickChart();
        chart
            .setConfig({
                type: 'bar',
                data: {
                    labels: ['Members', 'Humans', 'Bots', '24 Hours', '7 Days'],
                    datasets: [{
                        label: 'Developed By Mishael#0009',
                        data: [totalMembers, humanMembers, botMembers, last24Hours, last7Days],
                        backgroundColor: ['#36a2eb', '#ffce56', '#ff6384', '#cc65fe', '#66ff99']
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: `Member Count - ${guild.name}`
                        }
                    }
                }
            })
            .setWidth(500)
            .setHeight(300)
            .setBackgroundColor('#151515');

        const chartUrl = await chart.getShortUrl();

        const embed = new MessageEmbed()
            .setTitle(`${guild.name} | Members`)
            .setColor(client.config.EMBED_COLOR)
            .setDescription(`**__Total Members:__**\n\`${totalMembers}\`\n**__Human Members:__**\n\`${humanMembers}\`\n**__Bot Members:__**\n\`${botMembers}\``)
            .setFooter("Developed By Mishael")
            .setImage(chartUrl);

        await message.reply({ embeds: [embed] });
    },
};
