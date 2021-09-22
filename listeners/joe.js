// pulling functions file
const fn = require('../cmds/functions');

module.exports = {
    name: 'joe',
    description: 'ramsay, a saint among jesus himself',
    execute(message) {
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
        if (message.content.toLowerCase().includes(("who" || "what") && ("joe" || "candice" || "ligma"))) {
            message.delete(); 
            message.channel.send({ content: warnings[fn.r(warnings.length)] });
        }
        
    }
}