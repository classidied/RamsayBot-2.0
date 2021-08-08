const { AudioPlayerStatus, entersState } = require('@discordjs/voice');

module.exports = {
    name: 'play' || 'p',
    description: 'play something',
    async execute(message, args) {
        //var voiceChannel = 
        const connection = await voiceChannel.join();
        connection.play('audio.mp3');
    }
}