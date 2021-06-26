/**
 * RamsayBot - The Best Gordon Ramsay-themed Discord Bot.
 * Sources: 
 * https://discordjs.guide/ -> basic discord.js guide
 * https://www.youtube.com/watch?v=BmKXBVdEV0g -> current set up
 * https://www.youtube.com/watch?v=AUOb9_aAk7U -> adv command handling: module exports stuff
 * https://discord.js.org/#/docs/main/stable/general/welcome -> discord.js API HAVE THIS OPEN ALWAYS
 * https://playcode.io/new/ -> online js editor: use for small tests 
 */

// importing env variables thing
require('dotenv').config();
// creating client object
const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs'); // to go into different files
const Sequelize = require('sequelize'); // sequelize + sqlite3 for databases

const PREFIX = "~"; 

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
    /**
     * Controllable/functions with a prefix
     */
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
            message.reply('I may or may not have thrown that command out into the trash, like my respect for Jamie Oliver--');
        }
    }
   
    /**
     * Non-controllable/functions without a prefix
     */
    // image reactions
    {
        if (message.content.toLowerCase().includes('bruh')) {
            if (message.author.bot) return;
            message.channel.send({
                files: ['..\\RamsayBot-2.0\\images\\bruh.jpg']
            });
        } else if (message.content.toLowerCase().includes('eat')) {
            if (message.author.bot) return;
            message.channel.send({
                files: ['..\\RamsayBot-2.0\\images\\eat.png']
            });
        } else if (message.content.toLowerCase().includes('lamb')) {
            if (message.author.bot) return;
            message.channel.send({
                files: ['..\\RamsayBot-2.0\\images\\lamb.jpg']
            });
        } else if (message.content.toLowerCase().includes('sausage')) {
            if (message.author.bot) return;
            message.channel.send({
                files: ['..\\RamsayBot-2.0\\images\\sosig.jpg']
            });
        } 
    }
    // catch bad math
    if (message.content.includes('+' || '-' || '*' || '/' || '^')) {
        client.commands.get('math').execute(message);
    }
    // 6th grader jokes
    {
        // catch joe
        if (message.content.toLowerCase().includes('who' && 'joe')) {
            client.commands.get('joe').execute(message);
        }
        // catch candice
        else if (message.content.toLowerCase().includes('who' && 'candice')) {

        }
        // catch ligma
        else if (message.content.toLowerCase().includes('what' && 'ligma')) {
            
        }
    }

});
