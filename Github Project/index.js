
// MMMMMMMM               MMMMMMMM  iiii                  hhhhhhh                                                 lllllll                     BBBBBBBBBBBBBBBBB                             tttt          
// M:::::::M             M:::::::M i::::i                 h:::::h                                                 l:::::l                     B::::::::::::::::B                         ttt:::t          
// M::::::::M           M::::::::M  iiii                  h:::::h                                                 l:::::l                     B::::::BBBBBB:::::B                        t:::::t          
// M:::::::::M         M:::::::::M                        h:::::h                                                 l:::::l                     BB:::::B     B:::::B                       t:::::t          
// M::::::::::M       M::::::::::Miiiiiii     ssssssssss   h::::h hhhhh         aaaaaaaaaaaaa      eeeeeeeeeeee    l::::l                       B::::B     B:::::B   ooooooooooo   ttttttt:::::ttttttt    
// M:::::::::::M     M:::::::::::Mi:::::i   ss::::::::::s  h::::hh:::::hhh      a::::::::::::a   ee::::::::::::ee  l::::l                       B::::B     B:::::B oo:::::::::::oo t:::::::::::::::::t    
// M:::::::M::::M   M::::M:::::::M i::::i ss:::::::::::::s h::::::::::::::hh    aaaaaaaaa:::::a e::::::eeeee:::::eel::::l                       B::::BBBBBB:::::B o:::::::::::::::ot:::::::::::::::::t    
// M::::::M M::::M M::::M M::::::M i::::i s::::::ssss:::::sh:::::::hhh::::::h            a::::ae::::::e     e:::::el::::l                       B:::::::::::::BB  o:::::ooooo:::::otttttt:::::::tttttt    
// M::::::M  M::::M::::M  M::::::M i::::i  s:::::s  ssssss h::::::h   h::::::h    aaaaaaa:::::ae:::::::eeeee::::::el::::l                       B::::BBBBBB:::::B o::::o     o::::o      t:::::t          
// M::::::M   M:::::::M   M::::::M i::::i    s::::::s      h:::::h     h:::::h  aa::::::::::::ae:::::::::::::::::e l::::l                       B::::B     B:::::Bo::::o     o::::o      t:::::t          
// M::::::M    M:::::M    M::::::M i::::i       s::::::s   h:::::h     h:::::h a::::aaaa::::::ae::::::eeeeeeeeeee  l::::l                       B::::B     B:::::Bo::::o     o::::o      t:::::t          
// M::::::M     MMMMM     M::::::M i::::i ssssss   s:::::s h:::::h     h:::::ha::::a    a:::::ae:::::::e           l::::l                       B::::B     B:::::Bo::::o     o::::o      t:::::t    tttttt
// M::::::M               M::::::Mi::::::is:::::ssss::::::sh:::::h     h:::::ha::::a    a:::::ae::::::::e         l::::::l                    BB:::::BBBBBB::::::Bo:::::ooooo:::::o      t::::::tttt:::::t
// M::::::M               M::::::Mi::::::is::::::::::::::s h:::::h     h:::::ha:::::aaaa::::::a e::::::::eeeeeeee l::::::l                    B:::::::::::::::::B o:::::::::::::::o      tt::::::::::::::t
// M::::::M               M::::::Mi::::::i s:::::::::::ss  h:::::h     h:::::h a::::::::::aa:::a ee:::::::::::::e l::::::l                    B::::::::::::::::B   oo:::::::::::oo         tt:::::::::::tt
// MMMMMMMM               MMMMMMMMiiiiiiii  sssssssssss    hhhhhhh     hhhhhhh  aaaaaaaaaa  aaaa   eeeeeeeeeeeeee llllllll                    BBBBBBBBBBBBBBBBB      ooooooooooo             ttttttttttt  
                                                                                                                                                                                        
                                                                                                                                                                                        
                                                                                                                                                                                        
const { Client, Intents, MessageEmbed, Collection } = require("discord.js");
const mongoose = require('mongoose');
const db = require('quick.db');
const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');
const chalk = require('chalk');
dotenv.config();
const client = new Client({
    intents: [
        "GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES",
        "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});
client.config = require('./config.json');
client.commands = new Collection();
const prefix = client.config.prefix;
client.login(client.config.token);
client.on('messageCreate', async (message) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase());
    if (!command) return;

    if (command) {
        await command.run(client, message, args);
    }
});
require('./handler/commands.js')(client);
let Discord = require('discord.js');







                                                                                                                                                                                        
                                                                                                                                                                                        
                                                                                                                            
                                                                                                                                                                                        

                                                                                                        

//                                                      ______   __            __  __ 
//                                                     /      \ |  \          |  \|  \
//                        _______   ______   _______  |  $$$$$$\ \$$  ______  | $$| $$
//                       /       \ /      \ |       \ | $$_  \$$|  \ /      \ | $$| $$
//                      |  $$$$$$$|  $$$$$$\| $$$$$$$\| $$ \    | $$|  $$$$$$\| $$| $$
//                      | $$      | $$  | $$| $$  | $$| $$$$    | $$| $$  | $$ \$$ \$$
//                      | $$_____ | $$__/ $$| $$  | $$| $$      | $$| $$__| $$ __  __ 
//                       \$$     \ \$$    $$| $$  | $$| $$      | $$ \$$    $$|  \|  \
//                        \$$$$$$$  \$$$$$$  \$$   \$$ \$$       \$$ _\$$$$$$$ \$$ \$$
//                                                                  |  \__| $$        
//                                                                   \$$    $$        
//                                                                    \$$$$$$         
                                                                        



//touch only this!!
//message
const messsagelog = "message delete logs channel id"
//other
const color = "color to embed, exmp : PURPLE"
const serverid = "guild / server id"
const welcone = "welcome channel id"
const verifyrole = "member role id"                                                               
const rolename = "high staff role name"
const applog = "application Log ChannelId" 




//                                                         lllllll         tttt            iiii  
//                                                         l:::::l      ttt:::t           i::::i 
//                                                         l:::::l      t:::::t            iiii  
//                                                         l:::::l      t:::::t                  
//                  mmmmmmm    mmmmmmm   uuuuuu    uuuuuu   l::::lttttttt:::::ttttttt    iiiiiii 
//                mm:::::::m  m:::::::mm u::::u    u::::u   l::::lt:::::::::::::::::t    i:::::i 
//               m::::::::::mm::::::::::mu::::u    u::::u   l::::lt:::::::::::::::::t     i::::i 
//               m::::::::::::::::::::::mu::::u    u::::u   l::::ltttttt:::::::tttttt     i::::i 
//               m:::::mmm::::::mmm:::::mu::::u    u::::u   l::::l      t:::::t           i::::i 
//               m::::m   m::::m   m::::mu::::u    u::::u   l::::l      t:::::t           i::::i 
//               m::::m   m::::m   m::::mu::::u    u::::u   l::::l      t:::::t           i::::i 
//               m::::m   m::::m   m::::mu:::::uuuu:::::u   l::::l      t:::::t    tttttt i::::i 
//               m::::m   m::::m   m::::mu:::::::::::::::uul::::::l     t::::::tttt:::::ti::::::i
//               m::::m   m::::m   m::::m u:::::::::::::::ul::::::l     tt::::::::::::::ti::::::i
//               m::::m   m::::m   m::::m  uu::::::::uu:::ul::::::l       tt:::::::::::tti::::::i
//               mmmmmm   mmmmmm   mmmmmm    uuuuuuuu  uuuullllllll         ttttttttttt  iiiiiiii
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                

client.on('messageCreate', message => {
    if (message.content.startsWith('!avatar')) {
        const user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setImage(user.avatarURL({ size: 4096, dynamic: true }))
            .setFooter("Made By Mishael");
        message.channel.send({ embeds: [embed] });
    }
});

client.on('messageDelete', async (message) => {
    if (message.author.bot) return;

    const logChannel = client.channels.cache.get(`${messsagelog}`);
    if (!logChannel) return console.log('Log channel not found.');

    const embed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setTitle('Message Deleted')
        .setDescription(`**User:** ${message.author} \n**Channel:** ${message.channel}\n\n**Message:** ${message.content}`)
        .setTimestamp()
        .setFooter("Made By Mishael");

    await logChannel.send({ embeds: [embed] });
});






//                _                          
//               | |                         
//  __      _____| | ___ ___  _ __ ___   ___ 
//  \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
//   \ V  V /  __/ | (_| (_) | | | | | |  __/
//    \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
                                          
                                          

client.on("guildMemberAdd", async (member) => {
    var channel = client.channels.cache.get(`${welcone}`); 
    if (!(member.guild.id == `${serverid}`)) {
        return;
    }
    var guild = member.guild;
    await guild.members.fetch(); 
    var memberCount = guild.memberCount;
    var embed = new MessageEmbed()
        .setAuthor({ name: guild.name, iconURL: guild.iconURL({ dynamic: true }) })
        .setColor(`${color}`)
        .setTitle("Welcome " + member.user.tag)
        .setDescription(`**Welcome ${member.user} To The ${guild.name}\n${member.user.username} Your'e the \`${guild.memberCount}\` in the guild**`)
        .setTimestamp()
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setFooter("Developed By Mishael")
    var button = new MessageButton()
        .setStyle("PRIMARY")
        .setLabel(`${member.guild.memberCount} Members`)
        .setCustomId("member_count")
        .setDisabled(true)
        .setEmoji("👥");
    channel.send({ embeds: [embed], components: [{ type: 1, components: [button] }] });
});






//                  _  __       
//                 (_)/ _|      
//  __   _____ _ __ _| |_ _   _ 
//  \ \ / / _ \ '__| |  _| | | |
//   \ V /  __/ |  | | | | |_| |
//    \_/ \___|_|  |_|_|  \__, |
//                         __/ |
//                        |___/ 

client.on('interactionCreate', async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === 'verify') {
        const embed = new MessageEmbed()
          .setTitle('Verification Successful')
          .setDescription('You have been successfully verified!')
          .setColor('PURPLE')
          .addField('Member', `<@${interaction.member.id}>`, true)
          .addField('Verified Role', `<@&${verifyrole}>`, true)
          .setFooter({ text: `• All Right Saved To Mishae.69 || discord.gg/fivembotmaster`, iconURL: `https://cdn.discordapp.com/attachments/1154768788043087892/1154859189823356928/maxresdefault.png` })
  
        interaction.reply({
          ephemeral: true,
          embeds: [embed],
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId('verify')
                .setLabel('Verified')
                .setStyle('SECONDARY')
                .setDisabled(true) 
            )
          ]
        });
  
        const member = interaction.member;
        member.roles.add(`${verifyrole}`);    
      }
    }
  });






                  
                  
//   ___  __ _ _   _ 
//  / __|/ _` | | | |
//  \__ \ (_| | |_| |
//  |___/\__,_|\__, |
//              __/ |
//             |___/ 


  client.on('messageCreate', async (message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = "!"
    let mesg = message.content.toLowerCase() || message.content.toUpperCase();
    if (!mesg.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const ns = args.join(' ')
    let guild = client.guilds.cache.get(`${guildid}`);
    if (command === 'say') {
      if (message.member.permissions.has("ADMINISTRATOR")) {
            message.delete()
            const embed = new Discord.MessageEmbed()
            .setTitle(`${servername} Announce`)
            .setDescription(`${ns}`)
            .setThumbnail(`${serverlogo}`)
            .setColor(`${servercolor}`)
        message.channel.send({ embeds: [embed] })
        } else {
            let rembed = new Discord.MessageEmbed()
            .setTitle("Error")
            .setDescription("You Dont Have The Permission For That!")
            .setColor(`${color}`)
            message.channel.send({embeds: [rembed]})
        }
    }
})
  



//      _         __  __                _ _           _   _             
//     | |       / _|/ _|              | (_)         | | (_)            
//  ___| |_ __ _| |_| |_     __ _ _ __ | |_  ___ __ _| |_ _  ___  _ __  
// / __| __/ _` |  _|  _|   / _` | '_ \| | |/ __/ _` | __| |/ _ \| '_ \ 
// \__ \ || (_| | | | |    | (_| | |_) | | | (_| (_| | |_| | (_) | | | |
// |___/\__\__,_|_| |_|     \__,_| .__/|_|_|\___\__,_|\__|_|\___/|_| |_|
//                               | |                                    
//                               |_|                                    


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'staffApplication') {
        const questions = [
            {
                question: 'Full Name?',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 1',
                            value: 'Full Name?'
                        }
                    ]
                }
            },
            {
                question: 'Email?',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 2',
                            value: 'Email?'
                        }
                    ]
                }
            },
            {
                question: 'Age?',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 3',
                            value: 'Age?'
                        }
                    ]
                }
            },
            {
                question: 'Why do you want to join the staff team? Specify.',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 4',
                            value: 'Why do you want to join the staff team? Specify.'
                        }
                    ]
                }
            },
            {
                question: 'What are your strengths and weaknesses as a team member and as an individual?',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 5',
                            value: 'What are your strengths and weaknesses as a team member and as an individual?'
                        }
                    ]
                }
            },
            {
                question: 'How many active hours can you contribute per day? (Minimum 3 hours per day)',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 6',
                            value: 'How many active hours can you contribute per day? (Minimum 3 hours per day)'
                        }
                    ]
                }
            },
            {
                question: 'Explain the difference between RDM and DM.',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 7',
                            value: 'Explain the difference between RDM and DM.'
                        }
                    ]
                }
            },
            {
                question: 'Explain the FEAR RP rule and provide an example without hot/cold weapons.',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 8',
                            value: 'Explain the FEAR RP rule and provide an example without hot/cold weapons.'
                        }
                    ]
                }
            },
            {
                question: 'Explain the Cop Baiting rule and provide two examples.',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 9',
                            value: 'Explain the Cop Baiting rule and provide two examples.'
                        }
                    ]
                }
            },
            {
                question: 'Explain the Meta Gaming rule and provide 2 examples (without using third-party software such as Discord + YouTube).',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 10',
                            value: 'Explain the Meta Gaming rule and provide 2 examples (without using third-party software such as Discord + YouTube).'
                        }
                    ]
                }
            },
            {
                question: 'A new citizen started arguing after an accident with a police officer. After a few minutes, the police officer became angry and gave him a $2000 fine. Then the citizen pulled out a weapon on the police officer and shot him. After that, the citizen continued and took the police officer to the sea. During this time, the police officer pressed the distress button. Explain in detail which rules were violated in this situation.',
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 11',
                            value: 'A new citizen started arguing after an accident with a police officer. After a few minutes, the police officer became angry and gave him a $2000 fine. Then the citizen pulled out a weapon on the police officer and shot him. After that, the citizen continued and took the police officer to the sea. During this time, the police officer pressed the distress button. Explain in detail which rules were violated in this situation.'
                        }
                    ]
                }
            },
            {
                question: "If you have anything to add, do it here",
                embed: {
                    title: 'Staff Application',
                    description: 'Please answer the following questions:',
                    fields: [
                        {
                            name: 'Question 12',
                            value: 'If you have anything to add, do it here'
                        }
                    ]
                }
            }
        ];

        const answers = {};

        await interaction.reply({
            content: 'Thank you for applying to the staff team. The bot has sent you a private message with the application form. Good luck!',
            ephemeral: true
        });

        const dmChannel = await interaction.user.createDM();

        let currentQuestion = 0;

        const askQuestion = async () => {
            if (currentQuestion >= questions.length) {
                const applicationLogChannelId = `${applog}`;

                const applicationEmbed = {
                    title: 'Staff Application',
                    fields: questions.map((question, index) => ({
                        name: `Question ${index + 1}`,
                        value: answers[index] || 'No answer provided'
                    })),
                    timestamp: new Date(),
                    footer: {
                        text: `Application submitted by ${interaction.user.tag} (${interaction.user.id})`,
                        icon_url: interaction.user.displayAvatarURL()
                    }
                };

                const applicationLogChannel = interaction.guild.channels.cache.get(applicationLogChannelId);

                if (applicationLogChannel && applicationLogChannel.isText()) {
                    const highStaffRole = interaction.guild.roles.cache.find(role => role.name === `${rolename}`);

                    if (highStaffRole) {
                        applicationLogChannel.send(`${highStaffRole}:`);
                    }

                    applicationLogChannel.send({ embeds: [applicationEmbed] });
                }

                const duration = Date.now() - interaction.createdAt;
                const seconds = Math.floor(duration / 1000);
                const milliseconds = duration % 1000;

                dmChannel.send(`Thank you for submitting the form! The form has been sent successfully. Time taken: ${seconds}.${milliseconds}s. \n We will inform you if you are accepted!`);

                return;
            }

            const currentQuestionData = questions[currentQuestion];
            dmChannel.send({ embeds: [currentQuestionData.embed] });

            currentQuestion++;
        };

        askQuestion();

        const collector = dmChannel.createMessageCollector({
            filter: (m) => m.author.id === interaction.user.id,
            max: questions.length,
            time: 600000 
        });

        collector.on('collect', (message) => {
            answers[currentQuestion] = message.content;
            askQuestion();
        });

        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                dmChannel.send('The time for the form has ended! Please try again later.');
            }
        });
    }
});










//                                                              _..._                                               
//                                                           .-'_..._''.                                            
//              _..._            .--.                      .' .'      '.\                               .           
//            .'     '.          |__|                     / .'                                        .'|           
//           .   .-.   .     .|  .--.                    . '             .-,.--.                     <  |           
//     __    |  '   '  |   .' |_ |  |                    | |             |  .-. |    __               | |           
//  .:--.'.  |  |   |  | .'     ||  |                    | |             | |  | | .:--.'.         _   | | .'''-.    
// / |   \ | |  |   |  |'--.  .-'|  |                    . '             | |  | |/ |   \ |      .' |  | |/.'''. \   
// `" __ | | |  |   |  |   |  |  |  |                     \ '.          .| |  '- `" __ | |     .   | /|  /    | |   
//  .'.''| | |  |   |  |   |  |  |__|                      '. `._____.-'/| |      .'.''| |   .'.'| |//| |     | |   
// / /   | |_|  |   |  |   |  '.'                            `-.______ / | |     / /   | |_.'.'.-'  / | |     | |   
// \ \._,\ '/|  |   |  |   |   /                                      `  |_|     \ \._,\ '/.'   \_.'  | '.    | '.  
//  `--'  `" '--'   '--'   `'-'                                                   `--'  `"            '---'   '---' 


process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught promise exception:', error);
});
