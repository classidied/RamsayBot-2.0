// pulling functions file
const fn = require('../cmds/functions');

module.exports = {
    name: 'joe',
    description: 'ramsay, a saint among jesus himself',
    execute(message) {
        message.delete(); 

        // make a list of things to randomly choose from? 
        var warnings = [
            'Watch out bro...',
            'yikes...',
            'The world is a dangerous place',
            'Be careful buddy...',
            'you shouldn\'t',
            'don\'t do that',
            'oof',
            ':eyes:',
            ':eye: :eye:',
            'uh oh',
            'you goofed'
        ]
        message.channel.send({ content: warnings[fn.r(warnings.length)] });
        // also maybe group all of the 6th grader jokes in here
    }
}