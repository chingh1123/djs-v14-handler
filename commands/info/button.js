const { ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    name: 'button',
    description: 'descriptions here',

    run: async (client, message, args) => {
        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder({
                label: 'test',
                style: ButtonStyle.Primary, 
              
                //ButtonStyle.Primary = blue
                //ButtonStyle.Secondary = grey
                //ButtonStyle.Danger = red
                //ButtonStyle.Success = green
                //ButtonStyle.Links = link button
              
                custom_id: 'red',
            })
        )

        message.channel.send({ content: "It's just button!", components: [button] })
    }
}
