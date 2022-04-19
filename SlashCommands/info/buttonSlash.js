const { 
  Client, 
  CommandInteraction, 
  ApplicationCommandType, 
  ButtonBuilder, 
  ActionRowBuilder, 
  ButtonStyle 
} = require("discord.js");

module.exports = {
    name: "button",
    description: "djs v14 button",
    type: ApplicationCommandType.ChatInput,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `This is a button`, components: [
            new ActionRowBuilder().addComponents(
                new ButtonBuilder({
                    label: 'hello!',
                    style: ButtonStyle.Primary,
                    custom_id: 'nice'
                })
            )
        ] });
    },
};
