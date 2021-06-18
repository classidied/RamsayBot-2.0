const Discord = require('discord.js');
const Canvas = require('canvas');
// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'finally2',
    description: 'text mod',
    async execute(message, args) {
        // checking for arguments
        if (!(args[0]) || !(args[1])) {
            message.channel.send("Please enter 2 keywords, seperated by a space. Ex: ~finally2 quality memes");
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
            context.font = `${fn.fontSize(canvas, text, 28)}px Arial`;
            
            // adding the modified caption at the bottom
            console.log('width: ' + context.measureText(text).width); // canvas can measure width
            console.log('height: ' + fn.fontSize(canvas, text, 28)); // pixel height of text is font size
            
            // backing (note: text (x,y) is bottom left, rect (x,y) is top left)
            context.fillRect(x-1, y - fn.fontSize(canvas, text, 28) + 2, context.measureText('finally').width+1, fn.fontSize(canvas, text, 28) + 2);
            context.fillRect(x-1, y+2, context.measureText(text).width, fn.fontSize(canvas, text, 28) + 8); 
            
            context.fillStyle = '#ffffff';
            context.fillText('finally', x, y);
            context.fillText(text, x, y + fn.fontSize(canvas, text, 28) + 2);

            // sending the photo
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'finally2.png');
            message.channel.send(attachment);
        } 
    }
}