const Discord = require('discord.js');

// random function
function r(num) {
    return Math.floor(Math.random()*num);
}

// reading files function
function read(path, message) {
    const fs = require('fs')
    // reading from file
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        var lines = data.split('\n');
        var chosen = lines[r(lines.length)]
        message.channel.send(chosen);
    })
}

module.exports = { r, read };