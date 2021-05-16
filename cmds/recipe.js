// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'recipe',
    description: 'I send you my very own recipes!',
    execute(message, args) {
        if (args.length === 0) {
            message.channel.send("Here's my recipe for: ");
            fn.read('..\\RamsayBot-2.0\\data\\recipe.csv', message, []);
            // this is sent quicker than the function; add time delay probably
            message.channel.send("\nIf you don't make this immediately I will have the IRS come for you and your family.");
        } else {
            fn.read('..\\RamsayBot-2.0\\data\\recipe.csv', message, args);
        }
        
    }
}