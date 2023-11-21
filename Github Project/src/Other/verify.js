const Discord = require("discord.js");
const {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
} = require('discord.js');

module.exports = {
  name: 'verify',
  aliases: [`verify`],
  description: "verify button",


  cooldown: 1000 * 10 * 1, 
  run: async (client, message, args) => {
  message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle(`__Verify System!__ `)
      .setColor(`${color}`)
      .setDescription(`\n \`\`\`Welcome to CityLife Server! \`\`\` \n For your personal safety on the server and so that you will not be harmed  \n  please visit the rules room \n  [Click here](https://discord.com/channels/1141102268834402395/1125869618255376485) \n Continue a fun experience on the server. \n **   \n\n ** `)
      .setThumbnail(message.guild.iconURL({dynamic:true}))
      .setImage("https://cdn.discordapp.com/icons/1141102268834402395/cc51fa33a5eada3ecb2a3fd16c65a946.webp")
      .setFooter("Developed By Mishael#0009", client.user.displayAvatarURL())
      .setTimestamp();

    const nv = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId(`verify`)
        .setStyle('SECONDARY')
        .setEmoji("<:CityLife2:1139601056771342367>")
        .setDisabled('false'),
    )
    message.channel.send({ components: [nv], embeds: [embed] })

  }
}
