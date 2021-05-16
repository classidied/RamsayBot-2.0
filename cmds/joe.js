// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'joe',
    description: 'ramsay, a saint among jesus himself',
    execute(message) {
        message.delete(); 
        message.channel.send('Watch out bro...');
    }
}