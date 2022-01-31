const discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'descriptions here',

    run: async(client, message, args) => {
        message.channel.send(`${client.ws.ping} ms!`)
    }
}