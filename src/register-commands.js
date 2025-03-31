require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

// slash commands for the bot
const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    },
    {
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: '1',
                    },
                    {
                        name: 'two',
                        value: '2',
                    },
                    {
                        name: 'three',
                        value: '3',
                    },
                ],
                required: true,
            },
            {
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: '1',
                    },
                    {
                        name: 'two',
                        value: '2',
                    },
                    {
                        name: 'three',
                        value: '3',
                    },
                ],
                required: true,
            },
        ]
    }
];


// register the slash commands
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands }
        );

        console.log('Slash commands were registered successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }
})();