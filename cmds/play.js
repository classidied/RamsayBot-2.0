const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'play' || 'p',
    description: 'play something',
    async execute(message, args) {
        const { channel } = message.member.voice;
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    }
}