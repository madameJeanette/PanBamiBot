require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent
  ]
});

const triggerPhrases = ["kut grap", "ffs", "pfff", "wat kut", "slechte grap", "gele kaart", "kutgrap"];
const piratePhrases = ["YAR!", "YAR", "yar", "arr", "AYE", "aye"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  if (message.content.includes("hallo")) {
    try {
      await message.channel.send('Je bent zelf een hallo');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  if (message.content.includes("sst")) {
    try {
      await message.channel.send('https://tenor.com/view/friends-joey-ears-gif-4582964');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  if  (triggerPhrases.some(phrase => message.content.includes(phrase))) {
    try {
      await message.channel.send('https://tenor.com/view/yellow-card-soccer-football-futbol-referee-gif-16290706'); //gele kaart meme
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  if (message.content.includes("rode kaart")) {
    try {
      await message.channel.send('*IK MUTE JE SMOEL*');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  if (message.content.includes("de vrouw")) {
    try {
      await message.channel.send('https://tenor.com/view/pan-bami-rotterdam-ideaal-heuj-throw-food-away-gif-11966277');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  if  (piratePhrases.some(phrase => message.content.includes(phrase))) {
    try {
      await message.channel.send('https://tenor.com/view/aye-aye-aye-captain-pirates-of-the-caribbean-johnny-depp-gif-4531400');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
});

client.login(process.env.CLIENT_TOKEN);
