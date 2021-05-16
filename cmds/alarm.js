// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'alarm',
    description: 'wake up your friends :eye: :eye:',
    execute(message, args) {
        message.channel.send(args, {
            // this gif is not top notch we can do better than this
            files: ['..\\RamsayBot-2.0\\images\\alarm.gif']
        });
    }
}