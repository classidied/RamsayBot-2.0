const Discord = require('discord.js');

// random function
function r(num) {
    return Math.floor(Math.random()*num);
}

// reading files function
function read(path, message, args) {
    const fs = require('fs')
    // reading from file
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        // storing data into a string array
        var lines = data.split('\n');
        // check if there are arguments
        let options = [];
        if (args.length === 0) {
            var chosen = lines[r(lines.length)]
            message.channel.send(chosen);
        } else {
            // when the bulk of a function is dedicated to one command asdfhkjsf
            // linear search through data for matching keywords
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].toLowerCase().includes(args)) {
                    // storing matching data into an array
                    options.push(lines[i]);
                }
            }
            // choosing at most 3 random data points to send
            if (options.length === 0) {
                message.channel.send("It appears that I do not have a recipe for `" + args + 
                "`.\nIf you wish, you can try again using less keywords or specificity.");
            } else if (options.length <= 3) {
                message.channel.send("Here are some recipes that have matched your input: \n");
                for (let i = 0; i < options.length; i++) {
                    message.channel.send(options[i] + "\n");
                }
                message.channel.send("If you screw up making one of my recipes, I will know.");
            } else if (options.length > 3) {
                message.channel.send("Here are some recipes that have matched your input: \n");
                for (let j = 0; j < 3; j++) {
                   // choosing random recipe
                   var temp = r(options.length);
                   message.channel.send(options[temp] + "\n");
                   // removing sent recipe to prevent duplicate
                   options.splice(temp, 1);
               }
               message.channel.send("If you screw up making one of my recipes, I will know.");
            }
        }
    })
}

// exporting methods
module.exports = { r, read };