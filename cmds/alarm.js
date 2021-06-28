module.exports = {
    name: 'alarm',
    description: 'wake up your friends :eye: :eye:',
    execute(message, args) {
        message.channel.send(args, {
            // this gif is not top notch we can do better than this probably also use a web link
            files: ['./images/alarm.gif']
        });
    }
}