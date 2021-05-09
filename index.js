/**
 * RamsayBot - The Best Gordon Ramsay-themed Discord Bot.
 */
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("with your mental breaking point");
});

// login to Discord with your app's token
client.login('ODM1MjQ1OTU2NTk2NjI5NTI0.YIMpag.TxiL2tmJkRUS6lXEWBWdC_dBCiI');

// logs every message sent to the server
client.on('message', message => {
    //on-command functions
    // help page
    // insult 
    // encourage
    // recipe
    // alarm
    // swearjar
    // userinfo
    // idiot sandwich
    // finally, some good [redacted] food
    // deepfry
    // "you, you, you, you-"
    // music reviews

    //theoretically (not even but whatever) non-controllable functions
    // joe catch
    // bad math catch + insult
    // lamb 
    // bruh
    // eat
    // sosig
    
	if (message.content === '~ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});
