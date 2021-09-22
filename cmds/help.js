const { MessageAttachment, MessageEmbed }= require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays help page',
    execute(message) {
      const chad = new MessageAttachment('./images/chad.png');
      const lamb = new MessageAttachment('./images/lamb.jpg');
      const helpPage = new MessageEmbed()
      .setColor('#2596be') // find different embed color maybe? 
      .setTitle('Hello! I\'m Gordon Ramsay!')
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
            '\n`finally <@member1> (up to 2 members)` - image mod' +
            '\n`finally <keyword-1> <keyword-2>` - text mod' /* +
            '\n`you* <@member1> (up to 4 different members)` - :flushed:' + // this might be a vid
            '\n`raw* <@member>` - it\'s ***R A W***' +
            '\n`deepfry* <@member>` - classic deepfry' +
            '\n`lambsauce* <keyword>` - you\'ll like this one, I promise' + // this is a vid
            '\n`throw* <@member>` - you suck if you got tagged' // this is a vid */
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
            '\n2. Who\'s joe?'
          }
        )
      message.channel.send({ embeds: [helpPage], files: [chad, lamb] }); // sending the help page
    }
}
