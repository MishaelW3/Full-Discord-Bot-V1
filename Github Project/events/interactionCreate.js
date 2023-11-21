const chalk = require('chalk');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    try {
      const command = require(`../commands/${commandName}.js`);
      await command.execute(interaction);
    } catch (error) {
      console.error(chalk.red(`[ERROR] ${error}`));
      await interaction.reply({ content: 'An error occurred while executing the command.', ephemeral: true });
    }
  },
};
