// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'encourage',
    description: 'pretend that someone cares about you',
    execute(message) {
        fn.read('./data/encouragements.csv', message, []);
    }
}