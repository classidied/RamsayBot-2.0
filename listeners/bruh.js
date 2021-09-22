module.exports = {
    name: 'bruh',
    description: 'image reactions',
    execute(message) {
        const images = [
            'bruh',
            'eat',
            'lamb',
            'sausage'
        ]
        for (let i = 0; i < images.length; i++) {
            if (message.content.toLowerCase().includes(images[i])) {
                if (message.author.bot) return;
                message.channel.send({
                    files: [`./images/${images[i]}.png`]
                });
            }
        }
    }

}