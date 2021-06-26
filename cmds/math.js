const Discord = require('discord.js');

module.exports = {
    name: 'math',
    description: 'You suck at math',
    execute(message) {
        if (message.content.includes('+')) {
            // algorithm
            /*
            - remove all spaces (use regex)
            - check chars next to symbol (how do you recognize if its math wtf maybe only do digit operations rip algebra)
            - perform the operation
            - check if that's what's beside the equals sign
            - if yes do nothing
            - if no they're a donkey
            */
        } else if (message.content.includes('-')) {

        } else if (message.content.includes('*')) {

        } else if (message.content.includes('/')) {
            
        } else if (message.content.includes('^')) {

        }
    }
}