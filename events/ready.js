const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} is online and ready to go!`)
    
    client.user.setPresence({ activities: [{ name: 'discordjs v14'}], status: 'dnd' });
)};
