// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'encourage',
    description: 'pretend that someone cares about you',
    execute(message) {
        fn.read('..\\RamsayBot-2.0\\data\\encouragements.csv', message);
    }
}