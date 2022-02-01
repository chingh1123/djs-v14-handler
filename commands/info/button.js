const { ButtonStyle, ButtonComponent, ActionRow } = require('discord.js'); //add one more ButtonStyle

module.exports = {
    name: 'button',
    description: 'descriptions here',

    run: async (client, message, args) => {
        const button = new ActionRow().addComponents(
            new ButtonComponent({
                label: 'test',
                style: ButtonStyle.Primary, 
              
                //ButtonStyle.Primary = blue
                //ButtonStyle.Secondary = grey
                //ButtonStyle.Danger = red
                //ButtonStyle.Success = green
                //ButtonStyle.Links = link button
              
                custom_id: 'red', //customId become custom_id
            })
        )

        message.channel.send({ content: "version 14 button", components: [button] })
    }
}
