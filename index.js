const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const {TOKEN} = require("config.json")
// The term "guild" is used by the Discord API and in discord.js to refer to a Discord server.
// GatewayIntentBits.Guilds: This intent allows your bot to receive information about the guilds (servers) it's in. Guilds are the servers where you and other users interact. This intent will allow your bot to know when it's added to a new server, removed from a server, or when the server's information changes.
// GatewayIntentBits.GuildMessages: This intent allows your bot to receive messages sent in guilds (servers). With this intent, your bot can listen for messages sent by users in the servers it's part of, allowing it to respond to commands, interact with users, and perform various tasks based on the content of the messages.

client.on(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.MessageCreate,(message)=>{
  console.log(message.content)
})

// client.on('interactionCreate', async interaction => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === 'ping') {
//     await interaction.reply('Pong!');
//   }
// });

client.login(TOKEN);