const { MessageEmbed } = require('discord.js');
const fn = require('./functions.js');

module.exports = {
    name: 'userinfo',
    description: 'not a donut',
    execute(message, args, client) {
        if (args[0]) {
            const user = fn.getUser(args[0], client);
            const userinfo = new MessageEmbed()
            .setColor('#2596be') 
            .setTitle(user.username + "'s secrets")
            .setThumbnail(`${fn.getAv(message, user)}`)
            .addFields(
                { name: 'User ID:', value: user.id, inline: true },
                { name: 'Tag:', value: `${user.tag}`, inline: true},
                { name: 'Avatar URL:', value: `[DONKEY](${user.displayAvatarURL()})`, inline: true},
                { name: 'Fresh at:', value: `${user.createdAt}`, inline: true },
                { name: 'Marinating since:', value: `${user.joinedAt}`, inline: true },
                { name: 'Status:', value: `${user.presence}`, inline: true }
            )
            .setTimestamp()
            // sending the embed
            message.channel.send({ embeds: [userinfo] });
        } else {
            message.channel.send("Mention a user. Quick, before the KGB decide that you're a waste of their time.");
        }
         
    }
}