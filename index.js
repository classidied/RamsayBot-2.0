/**
 * RamsayBot - The Best Gordon Ramsay-themed Discord Bot.
 * Sources: https://discordjs.guide/
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
    // on-command functions
    // help page
    if (message.content === '~help') {
		  const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#2596be') // find different embed color maybe? 
        .setTitle('Hello! I\'m Gordon Ramsay!')
        // @helia and rainbow, make sure your project folder is named RamsayBot-2.0 or this won't work for you
        .attachFiles(['..\\RamsayBot-2.0\\images\\chad.png'])
        .attachFiles(['..\\RamsayBot-2.0\\images\\located.jpg']) 
        .setAuthor('Gordon Ramsay', 'attachment://chad.png')
        .setDescription('The Best Gordon Ramsay-themed bot. My prefix is `~`, and now I will always be with you.')
        .setThumbnail('attachment://located.jpg')
        .addFields(
            { name: 'note:', value: 
              'only help works right now hah'},
            { name: '**Text Commands**', value: 
              '`insult` - self explanatory' + 
              '\n`encourage` - pretend that someone cares about you' + 
              '\n`recipe <optional-keyword>` - I send you my very own recipes!' +
              '\n`swearjar <@member>` - figure out who needs to be put under cuss control'
            },
            { name: '**Image Generation**', value: 
              '`alarm <@member>` - wake up your friends :eye: :eye:' + 
              '\n`idiot <@member>` - sandwich :)' +
              '\n`finally <@member1> <@member2>` - some good f`--` food' +
              '\n`you <@member1> (up to 4 different members)` - :flushed:' +
              '\n`raw <@member> ` - it\'s still mooing!' +
              '\n`deepfry <@member> ` - classic deepfry' +
              '\n`lambsauce <keyword>` - you\'ll like this one, I promise'
            },
            { name: '**Music**', value: 
              '`play <keywords>`'
            },
            { name: '**Info**', value: 
              '`help` - display this help page' + 
              '\n`userinfo <@member>` - display user information'
            },
            { name: '**Misc**', value: 
              '1. There are certain words that Ramsay Bot responds to with a reaction image. Can you find them all?'}
        )
      message.channel.send(exampleEmbed); // sending the help page
	}
    // insult 
    if (message.content === '~insult') {
      // message.channel.send('Pong.');
    }
    // encourage
    // recipe
    // swearjar
    // userinfo

    // image functions
    // alarm
    // idiot sandwich
    // finally, some good [redacted] food
    // deepfry
    // "you, you, you, you-"
    // ITS RAW
    // music reviews

    // theoretically (not even but whatever) non-controllable functions
    // joe catch
    // bad math catch + insult
    // lamb 
    // bruh
    // eat
    // sosig
    

});
