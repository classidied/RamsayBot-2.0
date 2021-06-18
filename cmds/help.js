const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays help page',
    execute(message) {
        const helpPage = new Discord.MessageEmbed()
        .setColor('#2596be') // find different embed color maybe? 
        .setTitle('Hello! I\'m Gordon Ramsay!')
        // @collaborators, make sure your project folder is named RamsayBot-2.0 or this won't work for you
        .attachFiles(['..\\RamsayBot-2.0\\images\\chad.png'])
        .attachFiles(['..\\RamsayBot-2.0\\images\\lamb.jpg']) 
        .setAuthor('Gordon Ramsay', 'attachment://chad.png')
        .setDescription('The Best Gordon Ramsay-themed bot. My prefix is `~`, and now I will always be with you.')
        .setThumbnail('attachment://lamb.jpg')
        .addFields(
            { name: '**Text Commands**', value: 
              '`insult` - self explanatory' + 
              '\n`encourage` - pretend that someone cares about you' + 
              '\n`recipe <optional-keyword>` - I send you my very own recipes!' /* +
              '\n`swearjar* <@member>` - figure out who needs to be put under cuss control' */
            },
            { name: '**Image Generation**', value: 
              '`alarm <@member>` - wake up your friends :eye: :eye:' + 
              '\n`idiot <@member>` - sandwich :)' +
              '\n`finally1 <@member1> (up to 2 members)` - image mod' +
              '\n`finally2 <keyword-1> <keyword-2>` - text mod' /* +
              '\n`you* <@member1> (up to 4 different members)` - :flushed:' + // this might be a vid
              '\n`raw* <@member>` - it\'s ***R A W***' +
              '\n`deepfry* <@member>` - classic deepfry' +
              '\n`lambsauce* <keyword>` - you\'ll like this one, I promise' + // this is a vid
              '\n`merde* <@member1> (up to 4 different members)` - you suck if you got tagged' // this is a vid */
            },
            /*
            { name: '**Music***', value: 
              '`p <keywords>`'
            },
            */
            { name: '**Info**', value: 
              '`help` - display this help page' + 
              '\n`userinfo <@member>` - display user information'
            },
            { name: '**Misc**', value: 
              '1. There are certain words that Ramsay Bot responds to with a reaction image. Can you find them all?' + 
              '\n2. Who\'s joe?' /* +
              '\n3. You suck at math*' +
              '\n4. Ligma*' */
            }
          )
        message.channel.send(helpPage); // sending the help page
    }
}
