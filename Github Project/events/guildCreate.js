const fs = require("fs");
const chalk = require("chalk");

module.exports = {
    name: 'guildCreate',
    async execute(guild, client) {
        try {
            const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
            const commands = [];
            for (const file of commandFiles) {
              const command = require(`../commands/${file}`);
              commands.push(command.data.toJSON());
            }

            await guild.commands.set(commands);
            console.log(chalk.green(`[Commands Register] Commands registered to ${guild.name}`))
        } catch (error) {
            console.error(chalk.red(`[ERROR] ${error}`));
        }
    }
}