const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
    name: 'finally',
    description: 'some good f`--` food',
    async execute(message, args, user1, user2) {
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
    }
}