// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'insult',
    description: 'self explanatory',
    execute(message) {
        fn.read('./data/insults.csv', message, []);
    }
}