// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'insult',
    description: 'self explanatory',
    execute(message) {
        fn.read('..\\RamsayBot-2.0\\data\\insults.csv', message, []);
    }
}