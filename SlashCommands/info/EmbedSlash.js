const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'descriptions here',

    run: async(client, interaction, args) => {
        const sendEmbedMsg = new EmbedBuilder()
            .setTitle('nice')
            .setDescription('nice description')
            .setColor([255, 0, 255])
            .setAuthor({ name: 'author', iconURL: `${interaction.user.displayAvatarURL()}`})
            .setFooter({ text: 'hi', iconURL: `${interaction.user.displayAvatarURL()}`})
            .setImage('https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj')
            .setTimestamp()
            .setThumbnail(`${interaction.user.displayAvatarURL()}`)
        interaction.followUp({ embeds: [sendEmbedMsg] })
    }
}
