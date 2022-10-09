const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'descriptions here',

    run: async(client, message, args) => {
        const sendEmbedMsg = new EmbedBuilder()
            .setTitle('nice')
            .setDescription('nice description')
            .setAuthor({ name: 'author', iconURL: `${message.author.displayAvatarURL()}`})
            .setColor(255)
            .setFooter({ text: 'hi', iconURL: `${message.author.displayAvatarURL()}`})
            .setImage('https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj')
            .setTimestamp()
            .setThumbnail(`${message.author.displayAvatarURL()}`)
        message.channel.send({ embeds: [sendEmbedMsg] })
    }
}
