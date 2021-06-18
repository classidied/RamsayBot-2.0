/**
 * RamsayBot - The Best Gordon Ramsay-themed Discord Bot.
 * Sources: 
 * https://discordjs.guide/ -> basic discord.js guide
 * https://www.youtube.com/watch?v=BmKXBVdEV0g -> current set up
 * https://www.youtube.com/watch?v=AUOb9_aAk7U -> adv command handling: module exports stuff
 * https://discord.js.org/#/docs/main/stable/general/welcome -> discord.js API HAVE THIS OPEN ALWAYS
 * https://playcode.io/new/ -> online js editor: use for small tests 
 * 
 * Notes:
 * - each command should have its own .js file
 * - the images are kinda big, might wanna resize through mspaint or something so it lessens clog
 * - put data into databases aaaaaaaaaaaaaa
 * - recipe f'n: look into whatever the heck a webhook is and try to see if you can pull from gr's website
 */
/*
- functions that need to be implemented:
    // text/just not images: swearjar, userinfo, music reviews
        - swearjar will be the ramsaybot currency system (number of f's, number of donkeys maybe)

    // image/video functions: 
        deepfry, "you, you, you, you-", raw, that new thing I pinned in the gaming bros channel that isaiah sent,
        finally2

    // theoretically (not even but whatever) non-controllable functions: bad math catch + insult
- additions:
    - pg13 toggle -> current insult sheets are clean cause of yrhacks
    - censor with funnies toggle -> maybe use ramsay's substitutions (ex. 'shit' -> 'shiitake mushrooms')
        - https://www.youtube.com/watch?v=4PY0KzcyVJ8 start at 1:54
*/
// importing env variables thing
require('dotenv').config();
// creating client object
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "~"; 
const fs = require('fs'); // to go into different files

// yoinking different commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    client.commands.set(command.name, command);
}
// pulling functions file
const fn = require('./cmds/functions');
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
        // "..." is the spreader operator to take in all arguments
        const [cmd, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            // regex to eliminate extra spaces
            .split(/\s+/)
        ; 
        // testing: logging args to console 
        console.log("author: " + message.author);
        console.log(args);
       
        // there's probably a better way to do this but it's this for now 
        if (cmd === 'help') {
            client.commands.get('help').execute(message);
        } else if (cmd === 'insult') {
            client.commands.get('insult').execute(message);
        } else if (cmd === 'encourage') {
            client.commands.get('encourage').execute(message);
        } else if (cmd === 'recipe') {
            // concat args for recipe
            client.commands.get('recipe').execute(message, args.join());
        } else if (cmd === 'alarm') {
            client.commands.get('alarm').execute(message, args);
        } else if (cmd === 'idiot') {
            // client as param doesn't work in the module??
            const user = fn.getUser(args[0], client);
            client.commands.get('idiot').execute(message, args, user);
        } else if (cmd === 'finally1') {
            const user1 = fn.getUser(args[0], client);
            const user2 = fn.getUser(args[1], client);
            client.commands.get('finally1').execute(message, args, user1, user2);
        } else if (cmd === 'finally2') {
            client.commands.get('finally2').execute(message, args);
        }  else if (cmd === 'raw') {
            const user = fn.getUser(args[0], client);
            client.commands.get('raw').execute(message, args, user);
        } else if (cmd === 'userinfo') {
            client.commands.get('userinfo').execute(message, args);
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
        client.commands.get('bad math').execute(message);
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