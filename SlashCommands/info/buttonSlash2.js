const { ButtonBuilder, ActionRowBuilder, EnumResolvers, ApplicationCommandType } = require('discord.js');
const enumValues = EnumResolvers.resolveButtonStyle('DANGER');
const enumValues2 = EnumResolvers.resolveButtonStyle('PRIMARY');
const enumValues3 = EnumResolvers.resolveButtonStyle('SECONDARY');
const enumValues4 = EnumResolvers.resolveButtonStyle('SUCCESS');
const enumValues5 = EnumResolvers.resolveButtonStyle('LINK');

module.exports = {
    name: 'button2',
    description: 'descriptions here',
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, args) => {
        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('danger')
                .setStyle(enumValues)
                .setCustomId('12345'),

            new ButtonBuilder()
                .setLabel('primary')
                .setStyle(enumValues2)
                .setCustomId('1234'),

            new ButtonBuilder()
                .setLabel('secondary')
                .setStyle(enumValues3)
                .setCustomId('123'),

            new ButtonBuilder()
                .setLabel('success')
                .setStyle(enumValues4)
                .setCustomId('12'),

            new ButtonBuilder()
                .setLabel('link')
                .setStyle(enumValues5)
                .setURL('https://github.com/chingh1123/')
        )

        interaction.followUp({ content: "version 14 button", components: [button] })
    }
}
