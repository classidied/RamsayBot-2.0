// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'idiot',
    description: 'sandwich :)',
    execute(message, args) {
        message.channel.send(args, {
        });
    }
}