const { Client, GatewayIntentBits: gib, Collection } = require("discord.js");

const client = new Client({
    intents: [
        gib.Guilds,
        gib.GuildEmojisAndStickers,
        gib.DirectMessages,
        gib.GuildBans,
        gib.MessageContent,
        gib.GuildInvites,
        gib.GuildWebhooks,
        gib.GuildMessages,
        gib.GuildMembers,
        gib.GuildIntegrations,
        gib.GuildVoiceStates,
        gib.GuildMessageReactions
    ],
});
module.exports = client;

// // Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// // Initializing the project
require("./handler")(client);

// message content testing
client.on('messageCreate', message => {
    if(message.content === 'hello') return message.channel.send({ content: 'hi!' });
})

client.login(client.config.token);
