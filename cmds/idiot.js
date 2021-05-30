const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'idiot',
    description: 'sandwich :)',
    // not entirely sure why this needs to be async but we're running with it
    async execute (message, args, user) {
        // creating the canvas
        const canvas = Canvas.createCanvas(400, 398);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\idiot.png');
        
        // stretches image onto canvas
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // checking for argument
        if (args[0]) {
            if (!user) {
                return message.reply('Please use a proper mention for this command!');
            }
            // getting user avatar url
            const link = user.displayAvatarURL({ format: 'png', dynamic: true });
            const avatar = await Canvas.loadImage(link);

            // drawing avatar 
            context.drawImage(avatar, 110, 260, 100, 100);
            // sending the photo
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'idiot-sandwich.png');
            message.channel.send(args[0], attachment);
        } else {
            message.channel.send('Please mention a user!');
        }   
    }
}