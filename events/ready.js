const client = require("../index");
const { ActivityType } = require('discord.js')

client.on("ready", () => {
    console.log(`${client.user.tag} is online and ready to go!`);

    client.user.setActivity('discord.js', { type: ActivityType.Playing });
    client.user.setPresence({ status: 'online' });
});
