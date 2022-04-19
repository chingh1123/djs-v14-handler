const { ButtonBuilder, ActionRowBuilder, EnumResolvers } = require('discord.js');
const enumValues = EnumResolvers.resolveButtonStyle('DANGER');
// You also can do this enum values with other button style.

module.exports = {
    name: 'button2',
    description: 'descriptions here',

    run: async (client, message, args) => {
        const button = new ActionRow().addComponents(
            new ButtonComponent({
                label: 'test',
                style: enumValues,
                custom_id: '12345',
            })
        )

        message.channel.send({ content: "version 14 button", components: [button] })
    }
}
