const {Client, IntentsBitField} = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.login(token);