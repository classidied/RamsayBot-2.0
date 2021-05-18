const Discord = require('discord.js');
const client = new Discord.Client();

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

 // return member.user.displayAvatarURL({ format: 'jpg' });
     /*
    const link = args (user => {
        return args.displayAvatarURL({format: 'png', dynamic: true });
    });
    */

// getting user avatar function
function av(member) {
    if (member.startsWith('<@') && member.endsWith('>')) {
        member = member.slice(2, -1);
    }
    return member.displayAvatarURL({format: 'png', dynamic: true });
}
// get user function directly copied and pasted from the discord js guide oop
function getUserFromMention(mention) {
	if (!mention) console.log("not a user");
    // removing tag
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
        // checking for nickname
		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

// exporting methods
module.exports = { r, read, av, getUserFromMention };