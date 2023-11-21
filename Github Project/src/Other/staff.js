

const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: "staff",
    run: async (client, message, args) => {
        if (!(message.guild.id  == config.guildId)) {
            return;
        }
        if (!message.member.permissions.has("ADMINISTRATOR")) return;

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('staffApplication')
                    .setLabel('בקשת צוות 👤')
                    .setStyle('SECONDARY')
            );

        const embed = new MessageEmbed()
            .setColor(`${color}`)
            .setTitle("בקשת צוות")
            .setThumbnail("https://cdn.discordapp.com/attachments/1154768788043087892/1154859189823356928/maxresdefault.png")
            .setImage("https://cdn.discordapp.com/attachments/1154768788043087892/1154859189823356928/maxresdefault.png")
            .setDescription("תודה ששקלת להצטרף אלינו בתפקיד צוות! אנא לחץ על הכפתור למטה כדי להתחיל את תהליך הגשת הבקשה.");

        message.channel.send({
            embeds: [embed],
            components: [row]
        });
    }
};
