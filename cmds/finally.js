const Discord = require('discord.js');
const Canvas = require('canvas');
// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'finally',
    description: 'image or text mod',
    async execute(message, args, client) {
        // checking for whether it's a mention or a keyword
        if (args[0].startsWith('<@') && args[0].endsWith('>')) { // image
            const user1 = fn.getUser(args[0], client);
            const user2 = fn.getUser(args[1], client);
            // creating the canvas
            const canvas = Canvas.createCanvas(380, 426);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\finally.jpg');
            
            // stretches image onto canvas
            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            // checking for args
            if (args[0]) {
                if (!user1) {
                    return message.reply('Please use a proper mention for this command!');
                }
                // getting 1st user avatar url
                const link1 = user1.displayAvatarURL({ format: 'jpg', dynamic: true });
                const av1 = await Canvas.loadImage(link1);

                // drawing avatar 
                context.drawImage(av1, 150, 70, 110, 110);

                // checking for 2nd user
                if (args[1]) {
                    if (!user2) {
                        return message.reply('Please use a proper mention for this command!');
                    }
                    // getting 2nd user avatar url
                    const link2 = user2.displayAvatarURL({ format: 'jpg', dynamic: true });
                    const av2 = await Canvas.loadImage(link2);

                    // drawing avatar 
                    context.drawImage(av2, 115, 270, 110, 110);
                }
            } else {
                message.channel.send('Please mention at least one user!');
            }
            // sending the photo
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'finally.jpg');
            message.channel.send(args, attachment);
        } else { // text
            // checking for arguments
            if (!(args[0]) || !(args[1])) {
                message.channel.send("Please enter 2 keywords, seperated by a space. Ex: ~finally quality memes");
            } else {
                // creating the canvas
                const canvas = Canvas.createCanvas(450, 251);
                const context = canvas.getContext('2d');
                const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\finally2.png');
                
                // stretches image onto canvas
                context.drawImage(background, 0, 0, canvas.width, canvas.height);

                // co-ordinates for text placement
                const text = 'some ' + args[0] + ' fucking ' + args[1];
                const x = 15;
                const y = 210;
                context.font = `${fn.fontSize(canvas, text, 25)}px Arial`;
                
                // adding the modified caption at the bottom
                console.log('width: ' + context.measureText(text).width); // canvas can measure width
                console.log('height: ' + fn.fontSize(canvas, text, 28)); // pixel height of text is font size
                
                // backing (note: text (x,y) is bottom left, rect (x,y) is top left)
                context.fillRect(x-1, y - fn.fontSize(canvas, text, 25) + 2, context.measureText('finally').width+1, fn.fontSize(canvas, text, 25) + 2);
                context.fillRect(x-1, y+2, context.measureText(text).width, fn.fontSize(canvas, text, 25) + 8); 
                
                context.fillStyle = '#ffffff';
                context.fillText('finally', x, y);
                context.fillText(text, x, y + fn.fontSize(canvas, text, 25) + 2);

                // sending the photo
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'finally2.png');
                message.channel.send(attachment);
            } 
        }
    }
}