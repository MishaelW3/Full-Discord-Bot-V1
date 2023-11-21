const { MessageEmbed } = require('discord.js');
const config = require('./config.json');

module.exports = {
  name: 'clear',
  run: async (message, args) => {
    if (message.guild.id !== config.guildId) return;
    if (!message.member.roles.cache.has(config.allowedRoleId)) return message.reply({ content: `****You don't have access to this****` });

    try {
      let delAmount = args[0];
      if (isNaN(delAmount) || parseInt(delAmount) <= 0) return message.reply('**Choose a number between 1 and 100**');

      if (parseInt(delAmount) > 100) return message.reply('You can delete up to 100 messages');

      const messages = [...(await message.channel.messages.fetch({ limit: 100 }))
        .values()]
        .filter((msg) => msg.id !== message.id)
        .slice(0, delAmount);
      await message.channel.bulkDelete(messages);

      const embed = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Message Deletion')
        .setDescription(`${delAmount} messages have been deleted from the server`)
        .addField('Deleted by', message.author.tag)
        .addField('Number of messages', delAmount.toString())
        .setFooter('Developed By Mishael#0009', 'https://cdn.discordapp.com/attachments/1154768788043087892/1154859189823356928/maxresdefault.png')
        .setTimestamp();

      await message.channel.send({ embeds: [embed] }).then(e => {
        setTimeout(() => e.delete(), 10000);
      });
    } catch (err) {
      console.log(err);
    }
  }
};
