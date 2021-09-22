/**
 * RamsayBot - The Best Gordon Ramsay-themed Discord Bot.
 * Sources: 
 * https://discordjs.guide/ 
*/

// token var 
const { token } = require('./config.json');
// creating client object
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const fs = require('fs'); // to go into different files

const PREFIX = "~"; 

// yoinking from commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    client.commands.set(command.name, command);
}

// code will run when the client is ready
client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("with your mental breaking point | ~help");
});

// login to discord
client.login(token);

// logs every message sent to the server
client.on('messageCreate', message => {
    // splitting up the message by prefix, command, and arguments
    if (message.content.startsWith(PREFIX)) {
        // parsing commands
        const [cmd, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            // regex to eliminate extra spaces -> use commas if they're there?
            .split(/\s+/)
        ; 
        // testing: logging args to console 
        console.log("author: " + message.author);
        console.log(args);

        if (!client.commands.has(cmd)) return;
        // executing commands dynamically
        try {
            client.commands.get(cmd).execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply({ content: 'That command is a donkey!', ephemeral: true });
        }
    }
});
