const wixua = require("croxydb");
const { EmbedBuilder, IntegrationApplication } = require("discord.js");
module.exports = {
  name: "warn",
  description: "warning system",
  type: 1,
  options: [

{

  name: "user",
  description: "Specify a user",
  type: 6,
  required: true,


},
{
  name: "reason",
  description: "State a Reason",
  type: 3,
  required: true
},


  ],
  run: async (client, interaction) => {

    const user = interaction.options.getMember('user')
    const reason = interaction.options.getString('reason')

const warn = new EmbedBuilder()
.setAuthor({name: `Warned`, iconURL: user.user.avatarURL()})
.setDescription(`> **User named ${user} <@${interaction.user.id}> Warned by authority for __${reason}__, be careful next time**`)
.setColor("Green")
.setThumbnail(user.user.avatarURL())
.setFooter({text: "Wixua Tester", iconURL: client.user.avatarURL()})

interaction.reply({embeds: [warn]})

wixua.add(`uyarı_${user.id}`, 1)
  }
}
