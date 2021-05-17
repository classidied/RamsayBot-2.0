const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    
    // creating the canvas
    const canvas = Canvas.createCanvas(300, 350);
    const context = canvas.getContext('2d');
    
    const background = await Canvas.loadImage('..\\RamsayBot-2.0\\images\\idiot.png');
    // stretches image onto canvas
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'idiot-sandwich.png');
    message.channel.send(args, attachment);
}
module.exports = {
    name: 'idiot',
    description: 'sandwich :)',
    execute(message, args) {
        
    }
    /*
    
    */
    
}