const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: 'who are you?',
    execute(message, args) {
        const userinfoEmbed = new Discord.MessageEmbed()
        .setColor('#2596be')
        .setTitle(args + "'s secrets:")
        .addFields(
            { name: 'test!', value: 'hehe'}
        )
        /**
         * add:
         * swearjar stats
         * 
         */
        // sending the embed
        message.channel.send(userinfoEmbed);
    }
}