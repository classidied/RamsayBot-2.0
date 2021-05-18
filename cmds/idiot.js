const Discord = require('discord.js');
const Canvas = require('canvas');

// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'idiot',
    description: 'sandwich :)',
    // not entirely sure why this needs to be async but we're running with it
    async execute (message, args) {
        // creating the canvas
        const canvas = Canvas.createCanvas(400, 398);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\idiot.png');
        
        // stretches image onto canvas
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        /*
        // author code
        let member = message.author.displayAvatarURL({ format: 'png', dynamic: true });
        console.log(message.author + ', member: ' + member); // testing
        const avatar = await Canvas.loadImage(member);
        */
        
        // making avatar a circle -> amend
        {
            /*
            // Pick up the pen
            context.beginPath();
            // Start the arc to form a circle
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            // Put the pen down
            context.closePath();
            // Clip off the region you drew on
            context.clip();
            */
        }
        // mapping tagged user's >:( avatar
        /*
        const user = fn.getUserFromMention(args[0]);
        console.log("user: " + String(user));
        const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png', dynamic: true }));
        // drawing avatar
        context.drawImage(avatar, 110, 260, 100, 100);
        */

        // testing if getting user pfp links to send is possible damn no it is not
        if (args[0]) {
			const user = fn.getUserFromMention(args[0]);
            console.log(user);
			if (!user) {
				return message.reply('Please use a proper mention if you want to see someone elses avatar.');
			}

			return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		}

        // drawing avatar 
        // context.drawImage(avatar, 110, 260, 100, 100);
        // sending the photo
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'idiot-sandwich.png');
        message.channel.send(args, attachment);
    }
    /*
    
    */
}