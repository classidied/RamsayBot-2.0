const Discord = require('discord.js');
const Canvas = require('canvas');
// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'idiot',
    description: 'sandwich :)',
    // not entirely sure why this needs to be async but we're running with it
    async execute (message, args, client) {
        if (args[0]) {
            const user = fn.getUser(args[0], client);
            // creating the canvas
            const canvas = Canvas.createCanvas(400, 398);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\idiot.png');
            
            // stretches image onto canvas
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            const avatar = await Canvas.loadImage(fn.getAv(message, user));

            // drawing avatar 
            context.drawImage(avatar, 110, 260, 100, 100); // 1:x of tL, 2:y of tL, 3,4: width, height
            // sending the photo
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'idiot-sandwich.png');
            message.channel.send(args[0], attachment);
        } else {
            message.channel.send('Please mention a user!');
        }
        
    }
}