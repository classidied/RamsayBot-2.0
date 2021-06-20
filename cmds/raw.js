const Discord = require('discord.js');
const Canvas = require('canvas');
const fn = require('./functions');

module.exports = {
    name: 'raw',
    description: 'it\'s ***R A W***',
    async execute(message, args, client) {
        const user = fn.getUser(args, client);
        // choose from a random selection of images

        // creating the canvas
        const canvas = Canvas.createCanvas(380, 426);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\finally.jpg');
        
        // stretches image onto canvas
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // checking for args
        if (args[0]) {
            if (!user) {
                return message.reply('Please use a proper mention for this command!');
            }
            // getting user avatar url
            const link = user.displayAvatarURL({ format: 'jpg', dynamic: true });
            const av = await Canvas.loadImage(link);

            // drawing avatar 
            // context.drawImage(av, 150, 70, 110, 110);
        } else {
            message.channel.send('Mention a user, you donkey.');
        }
        // sending the photo
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'raw.png');
        message.channel.send(args, attachment);
    }
}