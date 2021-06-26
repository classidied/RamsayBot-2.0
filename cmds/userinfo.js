const Discord = require('discord.js');
const fn = require('./functions');

module.exports = {
    name: 'userinfo',
    description: 'who are you?',
    execute(message, args, client) {
        const user = fn.getUser(args[0], client);
        const userinfoEmbed = new Discord.MessageEmbed()
        .setColor('#2596be')
        .setTitle(user.username + "'s secrets:")
        .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true }))
        /**not done what else to do  */
        .addFields(
            { name: 'Tag:', value: user.tag },
            { name: 'Created on:', value: user.createdAt },
            { name: 'Potential last words:', value: user.lastMessage },
        )
        .setTimestamp()
        // sending the embed
        message.channel.send(userinfoEmbed);
    }
}