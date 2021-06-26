// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'joe',
    description: 'ramsay, a saint among jesus himself',
    execute(message) {
        message.delete(); 

        // make a list of things to randomly choose from? 
        message.channel.send('Watch out bro...');
        // also maybe group all of the 6th grader jokes in here
    }
}