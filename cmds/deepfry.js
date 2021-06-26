const Discord = require('discord.js');
const Canvas = require('canvas');
// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'deepfry',
    description: 'drop someone in a touch of olive oil',
    async execute(message, args, client) {
        const user = fn.getUser(args[0], client);
        // creating the canvas
        const canvas = Canvas.createCanvas(400, 400);
        const context = canvas.getContext('2d');
        const avatar = await Canvas.loadImage(fn.getAv(message, user));
        // fetch from deepfryer?
        
    }
}