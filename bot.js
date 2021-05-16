/**
 * RamsayBot - The Best Gordon Ramsay-themed Discord Bot.
 * Sources: 
 * https://discordjs.guide/ -> basic discord.js guide
 * https://www.youtube.com/watch?v=BmKXBVdEV0g -> cleaner set up
 * https://www.youtube.com/watch?v=AUOb9_aAk7U -> adv command handling: module exports stuff
 * https://discord.js.org/#/docs/main/stable/general/welcome -> discord.js API HAVE THIS OPEN ALWAYS
 * 
 * Notes:
 * - each command should have its own .js file
 * - the images are kinda big, might wanna resize through mspaint or something so it lessens clog
 * 
 */
/*
- functions that need to be implemented:
    // text/just not images: recipe, swearjar, userinfo, music reviews

    // image/video functions: alarm, idiot sandwich, finally, some good [redacted] food,
        deepfry, "you, you, you, you-", raw

    // theoretically (not even but whatever) non-controllable functions: joe catch
        bad math catch + insult, lamb, bruh, eat, sosig
*/
// importing env variables thing
require('dotenv').config();
// creating client object
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "~"; 
const fs = require('fs'); // to  into different files

// yoinking different commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    client.commands.set(command.name, command);
}
// code will run when the client is ready
client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("with your mental breaking point");
});

// login to discord
client.login(process.env.RAMSAYBOT_TOKEN);

// logs every message sent to the server
client.on('message', message => {
    // splitting up the message by prefix, command, and arguments
    if (message.content.startsWith(PREFIX)) {
        // "..." is the spreader operator to take in all arguments
        const [cmd, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            // regex to eliminate extra spaces
            .split(/\s+/)
        ; 
        // there's probably a better way to do this but it's this for now
        if (cmd === 'help') {
            client.commands.get('help').execute(message);
        } else if (cmd === 'insult') {
            client.commands.get('insult').execute(message);
        } else if (cmd === 'encourage') {
            client.commands.get('encourage').execute(message);
        }
    }
});