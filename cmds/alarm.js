module.exports = {
    name: 'alarm',
    description: 'wake up your friends :eye: :eye:',
    execute(message, args) {
        // const alarm = new MessageAttachment('./images/alarm.gif');
        console.log('args: ', args);
        message.channel.send("https://media2.giphy.com/media/l4pT8HV11oj1YYqxq/giphy.gif");
    }
}