const { Client, EmbedBuilder, PermissionsBitField, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const wixua = require("croxydb")
module.exports = {
    name: "Warnings",
    description: 'You look at someones warnings.',
    type: 1,
    options: [
        {
            name: "user",
            description: "Who are you looking after?",
            type: 6,
            required: true
        },

    ],
    run: async (client, interaction) => {

      const user = interaction.options.getMember('user')
        const embed = new EmbedBuilder()
        .setAuthor({name: "Warnings", iconURL: user.user.displayAvatarURL({ dynamic: true })})
        .setDescription(`> **${user}** User's total alerts **${wixua.get(`uyarı_${user.id || "There are no warnings"}`)}**`)
        .setThumbnail(user.user.avatarURL())
        .setFooter({text: "Wixua Tester"})

        interaction.reply({embeds: [embed]})
    }

};